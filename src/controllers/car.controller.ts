import { Request, Response } from "express";
import { insertCar } from "../services/car.service";
import { handleHttp } from "../utils/error.handle";

export const createCar = async ({body}: Request, res: Response) => {
    try {
      const responseCreateCar = await insertCar(body)
      res.json(responseCreateCar)
      } catch (error: any) { // Especifica el tipo de la variable "error" como "Error"
        handleHttp(res, "ERROR_CREATE_CAR", error)
     }
};


