import * as React from 'react';

import { ButtonProps } from './types';
import { Slot } from '@radix-ui/react-slot';
import { buttonVariants } from './consts';
import { cn } from '@/utils';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, type = 'button', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        {...props}>
        {children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';
