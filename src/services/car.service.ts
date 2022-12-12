import { Car } from "../interfaces/car.interface";
import { CarModel } from "../models/Car";

export const createtCarService = async (car: Car) => {
  try {
    const responseInsert = await CarModel.create(car);
    return responseInsert;
  } catch (error) {
    console.log("error", error);
  }
};

export const getCarService = async (id: String) => {
  try {
    const response = await CarModel.findOne({ _id: id });
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const getCarsService = async () => {
  try {
    const response = await CarModel.find({});
    return response;
  } catch (error) {console.log("error", error);}
};

export const updateCarService = async (id: String, car: Car) => {
  try {
    const response = await CarModel.findByIdAndUpdate(
      { _id: id },
      car,
      { new: true }
    );
    return response;
  } catch (error) {console.log("error", error);}
};

export const deleteCarService = async (id: String) => {
  try {
    const response = await CarModel.findByIdAndDelete({ _id: id });
    return response;
  } catch (error) {console.log("error", error);}
};
