import express from "express";
import path from "path";
import bodyParser from "body-parser";
import expenseRoutes from "./routes/expenseRoutes.js";

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.resolve("../frontend"))); // Serve frontend static files

// Routes
app.use("/expenses", expenseRoutes);

// Serve the frontend app (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.resolve("../frontend", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
