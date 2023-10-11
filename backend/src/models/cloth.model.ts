import { Schema, model } from "mongoose";

export interface Cloth {
  id: string;
  name: string;
  price: number;
  tags: string[];
  imageUrl: string;
}

export const ClothSchema = new Schema<Cloth>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    imageUrl: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const ClothModel = model<Cloth>("cloth", ClothSchema);
