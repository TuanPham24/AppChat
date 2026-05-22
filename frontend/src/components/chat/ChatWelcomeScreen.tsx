import { SidebarInset } from "@/components/ui/sidebar";
import ChatWindowHeader from "./ChatWindowHeader";

const ChatWelcomeScreen = () => {
  return (
    <SidebarInset className="flex flex-col w-full h-full bg-transparent">
      
      {/* Header */}
      <ChatWindowHeader />

      {/* Body */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl bg-primary-foreground">

        {/* Background ambient glow */}
        <div className="absolute size-[500px] rounded-full bg-fuchsia-400/10 blur-3xl"></div>

        <div className="relative z-10 text-center">

          {/* Animated bubble */}
          <div className="relative mx-auto mb-10 flex items-center justify-center">

            {/* Pulse wave 1 */}
            <div className="absolute size-56 rounded-full bg-fuchsia-400/30 animate-ping-slow"></div>

            {/* Pulse wave 2 */}
            <div className="absolute size-44 rounded-full bg-purple-400/20 animate-ping-slower"></div>

            {/* Glow blur */}
            <div className="absolute size-32 rounded-full bg-fuchsia-500/30 blur-3xl"></div>

            {/* Main icon */}
            <div className="relative z-10 size-24 rounded-full bg-gradient-chat flex items-center justify-center shadow-glow">
              <span className="text-4xl">💭</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="mb-3 bg-gradient-chat bg-clip-text text-3xl font-bold text-transparent">
            Chào mừng bạn đến với Wypte!
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground">
            Chọn một cuộc hội thoại để bắt đầu chat!
          </p>
        </div>
      </div>
    </SidebarInset>
  );
};

export default ChatWelcomeScreen;