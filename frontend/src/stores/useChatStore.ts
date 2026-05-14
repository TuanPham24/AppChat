import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { ChatState } from "../types/store";
import { chatService } from "@/services/chatService";

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      conversations: [],

      messages: {},

      activeConversationId: null,

      loading: false,

      reset: () =>
        set({
          conversations: [],
          messages: {},
          activeConversationId: null,
          loading: false,
        }),

      setActiveConversationId: (id: string | null) =>
        set({
          activeConversationId: id,
        }),
      fetchConversations: async () => {
        try {
          set({loading: true});
          const {conversations} = await chatService.fetchConversations();
          set({conversations, loading: false});
        } catch (error) {
          console.error("Lỗi xảy ra khi fetchConversations:", error);
          set({loading: false});
        }
      },
    }),
    

    {
      name: "chat-storage",

      partialize: (state) => ({
        conversations: state.conversations,
      }),
    }
  )
);