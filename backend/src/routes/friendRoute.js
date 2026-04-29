import express from "express";
import {
  acceptFriendRequest,
  declineFriendRequest,
  getAllFriends,
  getFriendRequests,
  sentFriendRequest,
} from "../controllers/friendController";

const router = express.Router();

router.post("/requests", sentFriendRequest);
router.post("/requests/:requestId/accept", acceptFriendRequest);
router.post("/requests/:requestId/decline", declineFriendRequest);
router.get("/requests", getFriendRequests);
router.get("/", getAllFriends);
router.get("/requests", getFriendRequests);

export default router;
