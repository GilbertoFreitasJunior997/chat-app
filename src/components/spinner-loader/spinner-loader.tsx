import { Loader2 } from "lucide-react";

export const SpinnerLoader = () => (
  <div className='animate-spin size-8 absolute z-10 top-1/2 right-1/2 translate-1/2'>
    <Loader2 className='size-full' />
  </div>
);
