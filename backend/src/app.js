const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 8080;
const { sequelize } = require("./models/index");
dotenv.config();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connection success");
  })
  .catch((err) => {
    console.error("db connection error", err);
  });

const apiRoutes = require("./routes/api");

app.use(express.json());
app.use(cors("http://localhost:3000"));
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log("The server is on");
});
