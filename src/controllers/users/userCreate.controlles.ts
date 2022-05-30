import { Request, Response  } from "express";
import serializarUserMiddlewrares from "../../middlewares/serializarUser.middlewares";
import userCreateService from "../../services/user/userCreate.services";

const userCreateController = async(req:Request, res:Response) => {
    try {
        const data = req.body

        const newUser = await userCreateService(data)


        return res.status(201).send(serializarUserMiddlewrares(newUser))

    } catch (error) {
        if (error instanceof Error){
            return res.status(400).send({
                error: error.name,
                message:error.message
            })
        }
    }
}

export default userCreateController