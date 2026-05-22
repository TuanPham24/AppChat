import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ChatWindowLayout from "@/components/chat/ChatWindowLayout";
export default function ChatAppPage() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex h-screen w-full p-2">
                <ChatWindowLayout />
            </div>
        </SidebarProvider>
    )
}