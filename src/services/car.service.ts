import { Car } from "../interfaces/car.interface";
import { carModel } from "../models/Car";

export const createtCarService = async (car: Car) => {
  try {
    const responseInsert = await carModel.create(car);
    return responseInsert;
  } catch (error) {
    console.log("error", error);
  }
};

export const getCarService = async (id: String) => {
  try {
    const response = await carModel.findOne({ _id: id });
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const getCarsService = async () => {
  try {
    const response = await carModel.find({});
    return response;
  } catch (error) {console.log("error", error);}
};

export const updateCarService = async (id: String, car: Car) => {
  try {
    const response = await carModel.findByIdAndUpdate(
      { _id: id },
      car,
      { new: true }
    );
    return response;
  } catch (error) {console.log("error", error);}
};

export const deleteCarService = async (id: String) => {
  try {
    const response = await carModel.findByIdAndDelete({ _id: id });
    return response;
  } catch (error) {console.log("error", error);}
};
