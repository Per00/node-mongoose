import { Schema, model } from "mongoose";

const carSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Number },
  color: { type: String },
  doors: { type: Number },
  motorization: { type: Number },
});

export const CarModel = model("Car", carSchema);
