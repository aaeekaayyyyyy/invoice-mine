import express from "express";
import cors from "cors";
import { sample_clothes } from "./data";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/clothes", (req, res) => {
  res.send(sample_clothes);
});

app.get("/api/clothes/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const clothes = sample_clothes.filter((cloth) =>
    cloth.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(clothes);
});

app.get("/api/clothes/:clothId", (req, res) => {
  const clothId = req.params.clothId;
  const cloth = sample_clothes.find((cloth) => cloth.id == clothId);
  res.send(cloth);
});

const port = 5000;
app.listen(port, () => {
  console.log("website served on http://localhost:" + port);
});
