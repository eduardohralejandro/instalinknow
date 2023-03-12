import express from "express";
import cors from "cors";
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 8000;

app.use("/api", require("./source/routes/link"));

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
