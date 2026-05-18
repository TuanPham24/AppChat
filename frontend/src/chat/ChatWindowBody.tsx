import { useChatStore } from "@/stores/useChatStore";
import ChatWelcomeScreen from "./ChatWelcomeScreen";
import MessageItem from "./MessageItem";

const ChatWindowBody = () =>{
    const {activeConversationId, conversations, messages: allMessages } = useChatStore();
    const messages = allMessages[activeConversationId!]?.items ?? [];
    const selectedConvo = conversations.find((c)=>c._id === activeConversationId);

    if(!selectedConvo){
        return <ChatWelcomeScreen/>
    }

    if(!messages.length){
        return(
            <div className="flex h-full items-center justify-center text-muted-foreground">
                Chưa có tin nhắn nào trong cuộc trò chuyện này.
            </div>
        )
    }
    return(
        <div className="p-4 bg-zinc-100 dark:bg-zinc-900 h-full flex flex-col overflow-hidden">
            <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden beautiful-scrollbar">
                {messages.map((m, index)=><MessageItem key={m._id ?? index} message={m} index={index} messages={messages} selectedConvo={selectedConvo} lastMessageStatus="delivered"/>)}
            </div>
        </div>
    )
}
export default ChatWindowBody;