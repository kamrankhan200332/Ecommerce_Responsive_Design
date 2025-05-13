const authModel = require("../models/auth.model");

const authController = {
  async register(req, res, next) {
    const { name, username, email, password } = req.body;
    try {
      const user = new authModel({
        name,
        username,
        email,
        password,
      });

      const response = await user.save();
      res.status(201).json({
        success: true,
        message: "User Register Successfully!",
        response,
      });
    } catch (error) {
      return next(error);
    }
    res.send("register!");
  },
};

module.exports = authController;
