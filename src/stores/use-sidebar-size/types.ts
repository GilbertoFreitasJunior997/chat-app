export type UseSidebarSizeProps = {
  size: number;
};

export type UseSidebarSizeActions = {
  onResize(newSize: number): void;
};

export type UseSidebarSize = UseSidebarSizeProps & UseSidebarSizeActions;
