import { Schema, model } from "mongoose";

const carSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Date, required: true },
  color: { type: String },
  doors: { type: Number },
});

export const CarModel = model("Car", carSchema);
