import { Chat } from '@/components/chat';
import { ChatLayout } from '@/components/chat-layout';
import { FriendsSidebar } from '@/components/friends-sidebar';
import { Topbar } from '@/components/topbar';
import { Resizable } from '@/components/ui/resizable';

const ChatPage = () => {
  return (
    <ChatLayout>
      <Topbar />
      <Resizable.Group direction='horizontal'>
        <FriendsSidebar />
        <Resizable.Handle withHandle />
        <Chat />
      </Resizable.Group>
    </ChatLayout>
  );
};

export default ChatPage;
