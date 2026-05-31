import { Router } from "express";
import { getUsersController } from "./controller";

const router = Router();

router.get("/users", getUsersController);

export default router;
