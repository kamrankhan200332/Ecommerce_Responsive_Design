const express = require("express");
const { PORT } = require("./config");
const dbConnection = require("./App/db");
const authRouter = require("./App/routes/authRouter");
const app = express();

app.use(express.json());

dbConnection();
app.use(authRouter);

app.listen(PORT || 8000, () => {
  console.log(`Server is running on PORT ${PORT || 8000}`);
});

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

// {
//   "name": "Kamran Khan",
//   "username": "kamran khan",
//   "email": "kamrankhan@gmail.com",
//   "password": "Kamrankhan123"
// }
