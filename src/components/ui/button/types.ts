import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './consts';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
