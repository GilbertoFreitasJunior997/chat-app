import { InputProps } from './types';
import { Label } from '../label/label';
import { cn } from '@/utils';
import { forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type = 'text', label, ...props }, ref) => {
  const Comp = (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border text-zinc-900 dark:text-zinc-50 border-zinc-200 bg-zinc-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300',
        className,
        {
          "mt-2": !!label
        }
      )}
      ref={ref}
      {...props}
    />
  );

  return label ? (
    <Label>
      {label}
      {Comp}
    </Label>
  ) : (
    Comp
  );
});
Input.displayName = 'Input';
