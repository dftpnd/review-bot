import express from "express";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello World111123123!");
});

export default app;
