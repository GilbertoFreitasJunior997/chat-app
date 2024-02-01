import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SpinnerLoader } from '../spinner-loader';

export const Layout = () => (
  <div className='text-zinc-900 dark:text-zinc-100 h-dvh w-screen bg-zinc-50 dark:bg-zinc-950 overflow-hidden'>
    <Suspense fallback={<SpinnerLoader />}>
      <Outlet />
    </Suspense>
  </div>
);
