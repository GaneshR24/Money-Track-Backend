require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { db } = require("./db/db");
db();

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/usersRoute");
const transactionsRoute = require("./routes/transactionsRoute");

app.use("/api/users/", userRoute);
app.use("/api/transactions/", transactionsRoute);

app.get("/", (req, res) => {
  res.send("Welcome to our Money Track Application!");
});

const PORT = process.env.PORT || 24001;

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
