import { Request, Response } from "express";
import Users from "./model";

export const getUsersController = async (req: Request, res: Response) => {
  const users = await Users.find();
  res.status(200).json({
    success: true,
    message: "Get users successfull.",
    data: users,
  });
};
