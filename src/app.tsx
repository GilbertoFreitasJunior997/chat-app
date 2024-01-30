import { LoginPage } from './pages/login';
import { Suspense } from 'react';

export const App = () => {
  return (
    <Suspense fallback={<div>LOADING</div>}>
      <LoginPage />
    </Suspense>
  );
};
