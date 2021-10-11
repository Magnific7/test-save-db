import { Request, Response } from "express";
import User from "save-database";

class userController {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      res.json({ msg: "failed to fetch all users", status: 500, error });
    }
  }
}

export default new userController();
