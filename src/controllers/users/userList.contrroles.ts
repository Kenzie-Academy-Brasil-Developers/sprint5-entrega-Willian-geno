import { Request, Response  } from "express";
import serializarUserMiddlewrares from "../../middlewares/serializarUser.middlewares";
import userListServices from "../../services/user/userList.services";

const userListController = async(req:Request, res:Response) => {
    try {
        const users = await (await userListServices()).map((item) => serializarUserMiddlewrares(item))


        return res.status(200).send(users)
    } catch (error) {
        if (error instanceof Error){
            return res.status(400).send({
                error: error.name,
                message:error.message
            })
        }
    }
}

export default userListController