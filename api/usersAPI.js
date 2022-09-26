const express = require("express");
const usersRouter = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { Users } = require("../classes/userclass");

usersRouter.get("/", async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json({ users });
  } catch (err) {
    res.json({
      message:
        "This is not a valid path for you! Did you mean to view http://localhost:4001/users/employees ?",
    });
  }
});
usersRouter.get("/employees", async (req, res) => {
  const users = await Users.findAll();
  res.json({ users });
});
usersRouter.get("/:id", async (req, res) => {
  const users = await Users.findByPk(req.params.id);
  res.json({ users });
});
usersRouter.post("/", async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, async function (err, hash) {
    const newuser = await Users.create({
      email: email,
      username: username,
      password: hash,
    });
    res.json({ newuser });
  });
});
usersRouter.put("/:id", async (req, res) => {
  const user = await Users.update(req.body, { where: { id: req.params.id } });
  res.json({ user });
});
usersRouter.delete("/:id", async (req, res) => {
  await Users.destroy({ where: { id: req.params.id } });
  res.json({ message: "User deleted" });
});

module.exports = usersRouter;
