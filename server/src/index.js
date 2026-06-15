import express from "express";
import cors from "cors";
import clientRoutes from "./routes/clientRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "BASE URL" });
});

app.use("/api", clientRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
