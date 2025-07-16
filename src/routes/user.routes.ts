import express from 'express';

import { UserController } from '../controller/user.controller';

const router = express.Router();
const userController = new UserController();

router.post("/users", userController.create);
router.get("/getuser",userController.getUser);
router.get("/getall", userController.getUserAll)
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);
router.post("/login", userController.login);

export default router;