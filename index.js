import express from "express";
import * as dotenv from "dotenv";
import { connectToDB } from "./config/db.config.js";
import { carRouter } from "./routes/car.routes.js";

dotenv.config(); //variável de ambiente//portas
connectToDB();

const app = express();

app.use(express.json());

app.use("/car", carRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up running at port ${process.env.PORT}`);
});
