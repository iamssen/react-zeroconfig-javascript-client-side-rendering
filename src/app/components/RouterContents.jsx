import React from 'react';
import { Switch } from 'react-router-dom';
import { Suspense } from 'react-router-store';

function LoadingMessage() {
  return <div>Loading...</div>;
}

export function RouterContents({routeStore}) {
  return (
    <Suspense fallback={<LoadingMessage/>}>
      <Switch>
        {routeStore.getAllRoutes()}
      </Switch>
    </Suspense>
  );
}