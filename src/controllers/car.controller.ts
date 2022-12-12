import { Request, Response } from "express";
import { createtCarService, deleteCarService, getCarService, getCarsService, updateCarService } from "../services/car.service";
import { handleHttp } from "../utils/error.handle";

export const createCar = async ({body}: Request, res: Response) => {
    try {
      const responseCreateCar = await createtCarService(body)
      res.json(responseCreateCar)
      } catch (error: any) { // Especifica el tipo de la variable "error" como "Error"
        handleHttp(res, "ERROR_CREATE_CAR", error)
     }
};

export const getCars = async (req: Request, res: Response) => {
  try {
    const response = await getCarsService()
    const responseCreateCar = response ? response : 'NOT_CARS_FOUND' 
    res.json(responseCreateCar)
    } catch (error: any) { // Especifica el tipo de la variable "error" como "Error"
      handleHttp(res, "ERROR_CREATE_CAR", error)
   }
};


export const getCar = async ({params}: Request, res: Response) =>{
  try {
    const {id} = params
    //add a validation if car doesn´t exists!
    const response = await getCarService(id)
    const responseGetCar = response ? response : 'CAR_NOT_FOUND'
    res.status(200).json(responseGetCar)
  } catch (error: any) {
    handleHttp(res, "ERROR_GET_CAR", error)
  }
}
export const deleteCar = async ({params}: Request, res: Response) =>{
  try {
    const {id} = params
    //add a validation if car doesn´t exists!
    const response = await deleteCarService(id)
    const responseGetCar = response ? response : 'CAR_NOT_FOUND'
    res.status(200).json(responseGetCar)
  } catch (error: any) {
    handleHttp(res, "ERROR_GET_CAR", error)
  }
}
export const updateCar = async ({params, body}: Request, res: Response) =>{
  try {
    const {id} = params
    //add a validation if car doesn´t exists!
    const response = await updateCarService(id, body)
    const responseGetCar = response ? response : 'CAR_NOT_FOUND'
    res.status(200).json(responseGetCar)
  } catch (error: any) {
    handleHttp(res, "ERROR_GET_CAR", error)
  }
}


