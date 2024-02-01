import { Resizable } from '@/components/ui/resizable';
import { useSidebarSize } from '@/stores/use-sidebar-size';

export const FriendsSidebar = () => {
  const { onResize, size } = useSidebarSize();

  const handleResize = (newSize: number) => onResize(newSize);

  return (
    <Resizable.Item
      minSize={10}
      defaultSize={size}
      maxSize={25}
      onResize={handleResize}
      className='border-r border-black min-w-16 md:min-w-[unset]'>
      FriendsSidebar
    </Resizable.Item>
  );
};
