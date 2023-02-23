import express from "express";
import { CarModel } from "../models/car.model.js";

const carRouter = express.Router();

carRouter.post("/", async (req, res) => {
  try {
    const newCar = await CarModel.create({ ...req.body });
    return res.status(201).json(newCar);
  } catch (err) {
    console.log(err);
  }
});

export { carRouter };
