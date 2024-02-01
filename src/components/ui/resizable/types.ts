import { ComponentProps } from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

export type ResizableHandleProps = React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
};

export type ResizableGroupProps = ComponentProps<typeof ResizablePrimitive.PanelGroup>;
