const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Endpoint sederhana
app.get("/", (req, res) => {
  res.json({ message: "Hello, World! 🚀" });
});

// Contoh endpoint POST
app.post("/echo", (req, res) => {
  res.json({ you_sent: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
