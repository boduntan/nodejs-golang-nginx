import express from "express";
// Create a new express app instance
const app: express.Application = express();
app.get("/hello", function (req, res) {
  res.send("Hello World! This is Nickey's Project Hotfix");
});
app.listen(3000, "127.0.0.1", function () {
  console.log("App is listening on port 3000!");
});
