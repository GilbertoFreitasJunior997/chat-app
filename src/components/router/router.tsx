import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginLayout } from '../layouts/login-layout';
import { LoginPage } from '@/pages/login';
import { SignupPage } from '@/pages/signup';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={LoginLayout}>
          <Route
            path='login'
            Component={LoginPage}
          />
          <Route
            path='signup'
            Component={SignupPage}
          />
        </Route>

        <Route
          path='app'
          element={<>AppPage</>}
        />

        <Route
          path='*'
          element={<div className='text-red-500'>404</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};
