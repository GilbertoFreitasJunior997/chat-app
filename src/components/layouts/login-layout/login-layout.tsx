import { Loader2 } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const LoginLayout = () => (
  <div className='dark text-zinc-100 flex flex-col items-center justify-center h-dvh w-screen bg-zinc-950 overflow-hidden'>
    <div className='max-w-sm space-y-6'>
      <Suspense
        fallback={
          <div className='animate-spin'>
            <Loader2 className='size-8' />
          </div>
        }>
        <Outlet />
      </Suspense>
    </div>
  </div>
);
