import { Router } from './components/router';
import { Suspense } from 'react';

export const App = () => {
  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Router />
    </Suspense>
  );
};
