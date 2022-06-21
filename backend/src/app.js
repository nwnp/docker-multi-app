const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 8080;
const apiRoutes = require("./routes/api");

app.use(express.json());
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log("The server is on");
});
