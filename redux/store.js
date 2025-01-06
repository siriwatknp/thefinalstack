import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import thunk from 'redux-thunk';

let store;

function initStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

function isLocalStorageSupported() {
  let testKey = '_1_test';
  try {
    let storage = window.localStorage;
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

function hidrate() {
  let initialState = {};
  if (typeof window !== 'undefined') {
    if (isLocalStorageSupported()) {
      if (localStorage.getItem('reduxState')) {
        const extstingState = JSON.parse(localStorage.getItem('reduxState'));
        if (extstingState.user === undefined) {
          console.log('removing old deprecated state');
          localStorage.removeItem('reduxState');
        } else {
          initialState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
        }
      }
    } else {
      console.log('hidrate():client:local storage not supported');
    }
  } 
  return initialState;
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(hidrate());
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = initializeStore(initialState);
  return store
}