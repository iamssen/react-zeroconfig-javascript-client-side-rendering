import { App } from 'app';
import { cookieKeys, languageCodes } from 'app/config';
import { AppContextProvider } from 'app/context';
import { asyncRouteStore } from 'app/route/asyncRouteStore';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'shared/polyfills';
import { getBrowserLocale } from 'use-locale';
import { getBrowserTimezone } from 'use-timezone';

function AppProvider() {
  const currentLocale = getBrowserLocale({
    cookieKey: cookieKeys.locale,
    fallbackLanguageCodes: languageCodes,
  });
  
  const currentTimezone = getBrowserTimezone(cookieKeys.timezone);
  
  return (
    <BrowserRouter>
      <AppContextProvider currentLocale={currentLocale}
                          currentTimezone={currentTimezone}>
        <App routeStore={asyncRouteStore}/>
      </AppContextProvider>
    </BrowserRouter>
  );
}

render((
  <AppProvider/>
), document.querySelector('#app'));

if (module.hot) {
  Error.stackTraceLimit = Infinity;
  module.hot.accept();
}