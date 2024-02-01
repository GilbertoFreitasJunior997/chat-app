import { Resizable } from '@/components/ui/resizable';

export const Chat = () => {
  return (
    <Resizable.Item
      minSize={10}
      maxSize={90}>
      Chat
    </Resizable.Item>
  );
};
