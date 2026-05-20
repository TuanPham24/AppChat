import { friendService } from "@/services/friendService";
import { create } from "zustand";
import type { FriendState } from "@/types/store";

export const useFriendStore = create<FriendState>((set, get)=>({
    loading: false,
    searchByUsername: async(username) =>{
        try {
            set({loading: true});
            const user = await friendService.searchUserByUsername(username);
            return user ?? null;
        } catch (error) {
            console.error("Loi xay ra khi tim user bang username", error);
            return null;
        } finally {
            set({loading: false});
        }
    },
    addFriend: async(to , message)=>{
        try {
            set({loading: true});
            const resultMessage = await friendService.sendFriendRequest(to, message);
            return resultMessage;
        } catch (error) {
            console.error("Loi xay ra khi gui loi moi ket ban", error);
            return "Lỗi xảy ra khi gửi kết bạn. Có thể 2 bạn đã là bạn bè.";
        } finally {
            set({loading: false});
        }
    }
}))