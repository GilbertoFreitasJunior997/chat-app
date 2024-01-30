import { Outlet } from "react-router-dom";

export const LoginLayout = () => (
  <div className='dark text-zinc-100 flex flex-col items-center justify-center h-dvh w-screen bg-zinc-950 overflow-hidden'>
    <div className='max-w-sm space-y-6'>
      <Outlet />
    </div>
  </div>
);
