import Conversation from "../models/Conversation.js";
import Friend from "../models/Friend.js";

const pair = (a, b) => {
  return a < b ? [a, b] : [b, a];
};
export const checkFriendShip = async (req, res, next) => {
  try {
    const me = req.user._id;
    const recipientId = req.body?.recipientId ?? null;

    if (!recipientId) {
      return res.status(400).json({ message: "Cần cung cấp recipientId" });
    }

    if (recipientId) {
      const [userA, userB] = pair(me, recipientId);

      const isFriend = await Friend.findOne({ userA, userB });
      if (!isFriend) {
        return res.status(403).json({ message: "Không phải bạn bè" });
      }
      return next();
    }

    // todo: chat nhom
  } catch (error) {
    console.error("Lỗi xảy ra khi checkFriendShip:", error);
    return res.status(500).json({ message: "Lỗi server" });
  }
};
