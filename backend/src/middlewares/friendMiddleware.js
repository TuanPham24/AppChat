import Conversation from "../models/Conversation.js";
import Friend from "../models/Friend.js";

const pair = (a, b) => {
  return a < b ? [a, b] : [b, a];
};
export const checkFriendShip = async (req, res, next) => {
  try {
    const me = req.user._id;
    const recipientId = req.body?.recipientId ?? null;
    const memberIds = req.body?.memberIds ?? null;

    if (!recipientId && !memberIds) {
      return res
        .status(400)
        .json({ message: "Cần cung cấp recipientId hoặc memberIds" });
    }

    if (recipientId) {
      const [userA, userB] = pair(me, recipientId);

      const isFriend = await Friend.findOne({ userA, userB });
      if (!isFriend) {
        return res.status(403).json({ message: "Không phải bạn bè" });
      }
      return next();
    }

    const friendChecks = memberIds.map(async (memberId) => {
      const [userA, userB] = pair(me, memberId);
      const friend = await Friend.findOne({ userA, userB });
      return friend ? null : memberId;
    });

    const results = await Promise.all(friendChecks);
    const notFriends = results.filter(Boolean);
    if (notFriends.length > 0) {
      return res
        .status(403)
        .json({ message: "Bạn chỉ có thể thêm bạn bè vào nhóm.", notFriends });
    }

    next();
  } catch (error) {
    console.error("Lỗi xảy ra khi checkFriendShip:", error);
    return res.status(500).json({ message: "Lỗi server" });
  }
};
