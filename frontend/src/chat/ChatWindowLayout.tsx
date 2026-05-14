import { useChatStore } from "@/stores/useChatStore";
import ChatWelcomeScreen from "./ChatWelcomeScreen";
import ChatWindowSkeleton from "./ChatWindowSkeleton";
import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowBody from "./ChatWindowBody";
import MessageInput from "./MessageInput";

const ChatWindowLayout = () => {
    const {
        activeConversationId,
        conversations,
        messageLoading: loading,
    } = useChatStore();

    const selectedConvo =
        conversations.find((c) => c._id === activeConversationId) ?? null;

    if (!selectedConvo) {
        return <ChatWelcomeScreen />;
    }

    if (loading) {
        return <ChatWindowSkeleton />;
    }

    return (
        <div className="flex flex-1 h-screen overflow-hidden bg-background p-3">
            <div
                className="
                    relative
                    flex
                    flex-col
                    flex-1
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/20
                    bg-gradient-to-br
                    from-slate-100
                    via-slate-50
                    to-violet-100/40
                    dark:from-slate-900
                    dark:via-slate-950
                    dark:to-violet-950/30
                    shadow-2xl
                "
            >
                {/* background glow */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_40%)]
                        pointer-events-none
                    "
                />

                {/* Header */}
                <div className="relative z-10">
                    <ChatWindowHeader />
                </div>

                {/* Body */}
                <div
                    className="
                        relative
                        z-10
                        flex-1
                        overflow-y-auto
                        beautiful-scrollbar
                    "
                >
                    <ChatWindowBody />
                </div>

                {/* Footer */}
                <div
                    className="
                        relative
                        z-10
                        border-t
                        border-border/30
                        bg-background/60
                        backdrop-blur-xl
                        p-3
                    "
                >
                    <MessageInput />
                </div>
            </div>
        </div>
    );
};

export default ChatWindowLayout;