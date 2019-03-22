import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ko from 'react-intl/locale-data/ko';

// Set cookie key names
export const cookieKeys = {
  locale: 'locale',
  timezone: 'timezone',
};

// Set support languages
export const languageCodes = ['en-US', 'ko-KR'];

addLocaleData(en);
addLocaleData(ko);