import * as LabelPrimitive from '@radix-ui/react-label';

import { ElementRef, forwardRef } from 'react';

import { LabelProps } from './types';
import { cn } from '@/utils';

const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, children, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-900 dark:text-zinc-50 block',
        className,
      )}
      {...props}>
      {children}
    </LabelPrimitive.Root>
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
