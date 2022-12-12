import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/User";
import { encrypt, verify } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

export const registerService = async ({ email, password, name }: User) => {
  const userExists = await UserModel.findOne({ email });
  if (userExists) return "USER_EXISTS";
  const passwordHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passwordHash,
    name,
  });

  return registerNewUser;
};

export const loginService = async ({ email, password }: Auth) => {
  const userExists = await UserModel.findOne({ email });
  if (!userExists) return "USER_NOT_FOUND";
  const passwordHash = userExists.password;
  const isCorrect = await verify(password, passwordHash);
  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(userExists.email)
  return {token};
};
