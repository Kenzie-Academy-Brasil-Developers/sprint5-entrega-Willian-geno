import { Request, Response  } from "express";
import userDeleteServices from "../../services/user/userDelete.services";

const userDeleteControllers = (req:Request, res:Response) => {
    try{
        const id = req.params.id.toString()

        const user = userDeleteServices(id);

        return res.status(200).json("user deleted")
    } catch (error) {
        if (error instanceof Error){
            return res.status(400).send({
                error: error.name,
                message:error.message
            })
        }
}
}

export default userDeleteControllers