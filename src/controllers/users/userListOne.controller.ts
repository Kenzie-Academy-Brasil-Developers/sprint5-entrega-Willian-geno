import { Request,Response } from "express";
import serializarUserMiddlewrares from "../../middlewares/serializarUser.middlewares";
import userListOneServece from "../../services/user/userListOne.service";

const userListOneConteoller = async (req:Request, res:Response) => {
    try {
        const id = req.params.id

        const user = await userListOneServece(id)

        return res.status(201).send(serializarUserMiddlewrares(user))


    } catch (err) {
        if (err instanceof Error){
            return res.status(401).send({
                error: err.name,
                message: err.message,
            })
        }
    }
}

export default userListOneConteoller