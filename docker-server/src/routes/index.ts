import { Router, type Request, type Response } from "express";
import Users from "../models/user-model";

const router = Router();

router.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await Users.find();
    if (!users) {
      throw new Error("No users found.");
    }
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    throw new Error("Failed to get users");
  }
});
router.post("/users/create", async (req: Request, res: Response) => {
  try {
    const users = await Users.create(req.body);
    if (!users) {
      throw new Error("Failed to create user.");
    }
    res.status(201).json({
      success: true,
      data: users,
    });
  } catch (error) {
    throw new Error("Failed to create users");
  }
});

export default router;
