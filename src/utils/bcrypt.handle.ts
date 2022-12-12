import {hash, compare} from 'bcryptjs'

export const encrypt =async (password: string) =>{
    const passwordHash = await hash(password, 4)
    return passwordHash
}

export const verify =async (password: string, passwordHash: string) =>{
    const isCorrect = await compare(password, passwordHash)
    return isCorrect
}