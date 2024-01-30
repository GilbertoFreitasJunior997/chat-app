import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { LoginPage } from '@/pages/login';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <div className='dark text-zinc-100 flex flex-col items-center justify-center h-dvh w-screen bg-gray-900 overflow-hidden'>
              <div className='max-w-sm space-y-6'>
                <Outlet />
              </div>
            </div>
          }>
          <Route
            path='login'
            Component={LoginPage}
          />
          <Route
            path='signup'
            element={<> signup </>}
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
