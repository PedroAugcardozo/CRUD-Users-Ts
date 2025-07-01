import express from 'express';

import { UserController } from '../controller/user.controller';

const router = express.Router();
const userController = new UserController();

router.post("/users", userController.create);
router.get("/getuser", )
router.get("/getall",)
router.put("/update/:id", )
router.delete("/delete/:id")
router.post("/login",)

export default router;