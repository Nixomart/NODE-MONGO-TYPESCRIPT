import { Request, Response, Router } from "express";
import { createCar, getCar, getCars, updateCar, deleteCar } from "../controllers/car.controller";

const router = Router();

router.get('/cars', getCars)
router.post('/cars', createCar)
router.get('/cars/:id', getCar)
router.put('/cars/:id', updateCar)
router.delete('/cars/:id', deleteCar)

export { router };