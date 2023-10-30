// 'Import' the Express module instead of http
import express from "express";
const app = express();
app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});
app.get("*", (function (req, res) {
  res.sendFile(__dirname + "/index.html" )
})
app.listen(3000, function(){
  console.log("Ctrl-Click here to test: http://localhost:3000")
})
