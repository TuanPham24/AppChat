import express from "express";
import {
  acceptFriendRequest,
  declineFriendRequest,
  getAllFriends,
  getFriendRequests,
  sentFriendRequest,
} from "../controllers/friendController.js";

const router = express.Router();

router.post("/requests", sentFriendRequest);
router.post("/requests/:requestId/accept", acceptFriendRequest);
router.post("/requests/:requestId/decline", declineFriendRequest);
router.get("/requests", getFriendRequests);
router.get("/", getAllFriends);

export default router;
