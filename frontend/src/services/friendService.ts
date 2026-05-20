import api from "@/lib/axios";

export const friendService = {
  async searchUserByUsername(username: string) {
    const response = await api.get(`/users/search?username=${username}`);
    return response.data.user;
  },

  async sendFriendRequest(to:string, message?: string){
    const res = await api.post("/friends/requests", { to, message })
    return res.data.message
  }
};