import React from 'react';
import { languageCodes } from '../config';
import { useAppContextState } from '../context';

export function LanguageChangeButton() {
  const {locale, updateLocale} = useAppContextState();
  
  return languageCodes.map(languageCode => (
    <button key={languageCode}
            className={languageCode === locale ? 'active' : ''}
            onClick={() => updateLocale(languageCode)}>
      {languageCode}
    </button>
  ));
}