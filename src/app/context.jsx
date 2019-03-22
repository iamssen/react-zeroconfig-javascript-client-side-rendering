import messages from 'generated/locales.json';
import React, { createContext, useContext } from 'react';
import { useLocale } from 'use-locale';
import { IntlProvider } from 'use-react-intl';
import { useTimezone } from 'use-timezone';
import { cookieKeys } from './config';

const AppContext = createContext(null);

export function AppContextProvider({children, currentLocale, currentTimezone}) {
  const {locale, updateLocale} = useLocale(currentLocale, {cookieKey: cookieKeys.locale});
  const {timezone, updateTimezone} = useTimezone(currentTimezone, cookieKeys.timezone);
  
  return (
    <IntlProvider locale={locale.slice(0, 2)} messages={messages[locale]}>
      <AppContext.Provider value={{
        locale,
        timezone,
        updateLocale,
        updateTimezone,
      }}>
        {children}
      </AppContext.Provider>
    </IntlProvider>
  );
}

export function useAppContextState() {
  return useContext(AppContext);
}

export const AppContextConsumer = AppContext.Consumer;