import { Router } from "express";
import { sample_clothes } from "../data";
import asyncHandler from "express-async-handler";
import { ClothModel } from "../models/cloth.model";
const router = Router();

router.get(
  "/seed",
  asyncHandler(async (req, res) => {
    const clothesCount = await ClothModel.countDocuments();
    if (clothesCount > 0) {
      res.send("Seed is already done!");
      return;
    }

    await ClothModel.create(sample_clothes);
    res.send("Seed is done!");
  })
);

router.get("/", (req, res) => {
  res.send(sample_clothes);
});

router.get("/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const clothes = sample_clothes.filter((cloth) =>
    cloth.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(clothes);
});

router.get("/:clothId", (req, res) => {
  const clothId = req.params.clothId;
  const cloth = sample_clothes.find((cloth) => cloth.id == clothId);
  res.send(cloth);
});

export default router;
