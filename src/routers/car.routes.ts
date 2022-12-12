import { Request, Response, Router } from "express";
import { createCar } from "../controllers/car.controller";

const router = Router();

router.post('/cars', createCar)

export { router };