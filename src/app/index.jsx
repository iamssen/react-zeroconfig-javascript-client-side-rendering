import React from 'react';
import { LanguageChangeButton } from './components/LanguageChangeButton';
import { RouterContents } from './components/RouterContents';
import { RouterNavigation } from './components/RouterNavigation';
import { TimezoneChangeSelect } from './components/TimezoneChangeSelect';
import './style.scss';

export function App({routeStore}) {
  return (
    <>
      <div className="header">
        <RouterNavigation/>
        <div className="header-space"/>
        <LanguageChangeButton/>
        <TimezoneChangeSelect/>
      </div>
      <div className="body">
        <RouterContents routeStore={routeStore}/>
      </div>
    </>
  );
}