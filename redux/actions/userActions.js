import { USER_THEME_CHANGE } from "./types";
//import store from '../store';

export const userThemeChange = (theme, skipPersist) => (dispatch, getState) => {
    //console.log(`userThemeChange: theme: ${theme}`);
    dispatch({
        type: USER_THEME_CHANGE,
        payload: theme
    });
    if (!skipPersist) {
        let currentState = getState();
        localStorage.setItem('reduxState', JSON.stringify({ ...currentState }));
    }
}

