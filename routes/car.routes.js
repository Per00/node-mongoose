import express from "express";
import { CarModel } from "../models/car.model.js";

const carRouter = express.Router();

//create//body-json-post
carRouter.post("/", async (req, res) => {
  try {
    if (req.headers.authorization) {
      return res.status(401).json("Não autorizado.");
    }
    const newCar = await CarModel.create({ ...req.body });

    return res.status(201).json(newCar);
  } catch (err) {
    console.log(err);
  }
});

//get all- get
carRouter.get("/", async (req, res) => {
  try {
    const cars = await CarModel.find({});
    return res.status(201).json(cars);
  } catch (err) {
    console.log(err);
  }
});

//find - get
carRouter.get("/:carId", async (req, res) => {
  try {
    const { carId } = req.params;

    const car = await CarModel.findOne({ _id: carId });
    return res.status(200).json(car);
  } catch (err) {
    console.log(err);
  }
});

//edit - body, json
//put: editar muitas informações
//path: editar informações pontuais
carRouter.put("/:carId", async (req, res) => {
  try {
    const { carId } = req.params;
    const updateCar = await CarModel.findOneAndUpdate(
      { _id: carId },
      { ...req.body },
      { new: true, runValidators: true }
    );
  } catch (err) {
    console.log(err);
  }
});

//delete - del
carRouter.delete("/:carId", async (req, res) => {
  try {
    const { carId } = req.params;
    const del = await CarModel.deleteOne({ _id: carId });

    return res.status(201).json(del);
  } catch (err) {
    console.log(err);
  }
});

export { carRouter };
