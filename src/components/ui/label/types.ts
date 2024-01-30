import * as LabelPrimitive from '@radix-ui/react-label';

import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

export type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  PropsWithChildren & {
    //
  };
