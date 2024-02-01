import { Outlet } from 'react-router-dom';

export const AuthLayout = () => (
  <div className='w-96 space-y-6 flex flex-col justify-center h-full mx-auto'>
    <Outlet />
  </div>
);
