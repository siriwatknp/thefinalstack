import * as React from 'react';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from "../src/theme";

import {Provider, useSelector} from "react-redux";

import {useStore} from "../redux/store";


function AppWithProvider(props) {
  const {Component, pageProps} = props;
  const userTheme = useSelector((state) => state.user.theme);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme} defaultMode="light">
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );

}

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <AppWithProvider {...props} />
    </Provider>
  );
}
