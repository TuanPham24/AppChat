"use client"

import * as React from "react"
import { Sun, Moon } from "lucide-react"
import { Switch } from "@/components/ui/switch"
// import { NavUser } from "@/components/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
} from "@/components/ui/sidebar"
import CreateNewChat from "@/components/chat/CreateNewChat"
import NewGroupChatModal from "@/components/chat/NewGroupChatModal"
import GroupChatList from "@/components/chat/GroupChatList"
import AddFriendModal from "@/components/chat/AddFriendModal"
import DirectMessageList from "@/components/chat/DirectMessageList"
import { useThemeStore } from "@/stores/useThemeStore"
import { useAuthStore } from "@/stores/useAuthStore"
import { NavUser } from "./nav-user"
import {useChatStore} from "@/stores/useChatStore"
import  ConversationSkeleton  from "@/components/skeleton/ConversationSkeleton"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {isDark, toggleTheme} = useThemeStore();
  const {user} = useAuthStore();
  const {convoLoading} = useChatStore();
  
  return (
    <Sidebar variant="inset" {...props}>
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="bg-gradient-primary">
                <a href="#" className="w-full">
                  <div className="flex w-full items-center px-2 justify-between">
                    <h1 className="text-xl font-bold text-white">Moji</h1>
                    <div className="flex items-center gap-2">
                      <Sun className="size-4 text-white/80" />
                      <Switch checked={isDark} onCheckedChange={toggleTheme} className ="data-[state=checked]:bg-background/80"/>
                      <Moon className="size-4 text-white/80"/>
                    </div>
                  </div>
                </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="beautiful-scrollbar">
        {/* New Chat */}
        <SidebarGroup>
          <SidebarGroupContent>
            <CreateNewChat/>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Group Chat */}
        <SidebarGroup>
          <div className="flex items-center justify-between">
          <SidebarGroupLabel className="uppercase">
            Nhóm chat
          </SidebarGroupLabel>         
            <NewGroupChatModal/>
          </div>
          
          

          <SidebarGroupContent>
           {convoLoading ? <ConversationSkeleton/> : <GroupChatList/>}
          </SidebarGroupContent>

        </SidebarGroup>

        {/* Direct Message */}

        <SidebarGroup>
          <SidebarGroupLabel className="uppercase">
            Bạn bè
          </SidebarGroupLabel>

          <SidebarGroupAction title="Kết bạn" className="cursor-pointer">
            <AddFriendModal/>
          </SidebarGroupAction>

          <SidebarGroupContent>
          {convoLoading ? <ConversationSkeleton/> : <DirectMessageList />} 
          </SidebarGroupContent>

        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
       {user && <NavUser user={user} />}
      </SidebarFooter>
    </Sidebar>
  )
}
