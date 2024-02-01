import { Resizable } from '@/components/ui/resizable';
import { useSidebarSize } from '@/stores/use-sidebar-size';
import { supabase } from '@/supabase';
import { useEffect, useState } from 'react';

export const UsersSidebar = () => {
  const { onResize, size } = useSidebarSize();
  const handleResize = (newSize: number) => onResize(newSize);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('users').select('*');
      console.log(data);
    })();
  }, []);

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
