export const addFriend = (req, res) => {
  try {
  } catch (error) {
    console.error("Lỗi khi gửi lời mời kết bạn", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const acceptFriend = (req, res) => {
  try {
  } catch (error) {
    console.error("Lỗi khi chấp nhận lời mời kết bạn", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const declineFriend = (req, res) => {
  try {
  } catch (error) {
    console.error("Lỗi khi từ chối lời mời kết bạn", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const getAllFriends = (req, res) => {
  try {
  } catch (error) {
    console.error("Lỗi khi lấy danh sách bạn bè", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const getFriendsRequest = (req, res) => {
  try {
  } catch (error) {
    console.error("Lỗi khi lấy danh sách yêu cầu kết bạn", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
