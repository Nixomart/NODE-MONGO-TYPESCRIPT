import { Car } from "../interfaces/car.interface"
import { carModel } from "../models/Car"

export const insertCar = async(car: Car) =>{
    const responseInsert = await carModel.create(car)
    return responseInsert;
}