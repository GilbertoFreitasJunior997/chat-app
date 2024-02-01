import { Chat } from '@/components/chat';
import { ChatLayout } from '@/components/chat-layout';
import { UsersSidebar } from '@/components/users-sidebar';
import { Topbar } from '@/components/topbar';
import { Resizable } from '@/components/ui/resizable';

const ChatPage = () => {
  return (
    <ChatLayout>
      <Topbar />
      <Resizable.Group direction='horizontal'>
        <UsersSidebar />
        <Resizable.Handle withHandle />
        <Chat />
      </Resizable.Group>
    </ChatLayout>
  );
};

export default ChatPage;
