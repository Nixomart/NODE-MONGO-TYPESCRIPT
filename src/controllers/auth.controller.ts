import { Request, Response } from "express"
import { loginService, registerService } from "../services/auth.service"
import { handleHttp } from "../utils/error.handle"

export const registerController = async ({body}: Request, res: Response) =>{
    try {
        const response = await registerService(body)
        res.status(200).json(response)
    } catch (error: any) {
        handleHttp(res, "ERROR_CREATE_CAR", error)
    }
}
export const loginController = async ({body}: Request, res: Response) =>{
    const {email, password} = body
    const response = await loginService({email, password})

if (response === 'PASSWORD_INCORRECT') return res.status(500).json({message: 'Password incorrect'})

    res.status(200).json(response)
}