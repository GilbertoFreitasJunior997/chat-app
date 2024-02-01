import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthLayout } from '@/components/auth-layout';
import { ChatPage } from '@/pages/chat';
import { Layout } from '@/components/layout';
import { LoginPage } from '@/pages/login';
import { SignupPage } from '@/pages/signup';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route Component={AuthLayout}>
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
            path='chat'
            Component={ChatPage}
          />

          <Route
            path='*'
            element={<div className='text-red-500'>404</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
