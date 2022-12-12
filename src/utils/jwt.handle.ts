import { sign, verify } from "jsonwebtoken";
import { JWT } from "../../config";

const jwtSecret = JWT || 'secreto';

export const generateToken =  (id: string) => {
  const jwt = sign({ id }, jwtSecret, {
    expiresIn: 86400
  });
  return jwt;
};

export const verifyToken = () => {};
