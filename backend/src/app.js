const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 8080;
const apiRoutes = require("./routes/api");

app.use(express.json());
app.use(cors("http://localhost:3000"));
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log("The server is on");
});
