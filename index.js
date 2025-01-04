import express from "express";
//importing the express module
const app = express();
//creating the varibale of app assigning it the value of the express module

const PORT = 3000;
//creating the varibale of port and assigning it the value of 3000

app.get("/", (req, res) => {
  res.json("Hello World");
  console.log("json sent");
});

app.get("/person/:hello/:world", (req, res) => {
  const { hello, world } = req.params;
  res.json({ hello, world });
});

app.get("/test/:input/:output", (req, res) => {
  const { input, output } = req.params;
  res.json({ input, output });
});

//telling our app (which is express), when it receives a get request, to the / url, to responp by sending ('Hello World!')

app.listen(PORT, () => {
  console.log("This app is running on PORT 3000");
});

//telling our app, which is express, to listen on the port varibale which we assigned, and when it is listening, to log the statment (`Example app listening on port ${port}`)
