import { Request, Response } from "express"
import userPacthServices from "../../services/user/userPatch.services"

const userPatchController = (req:Request, res:Response) => {
    try {
        const data = req.body
        const id = req.params.id.toString()

        const user = userPacthServices(data, id)

        return res.status(200).send(user)
    } catch (error) {
        if (error instanceof Error){
            return res.status(400).send({
                error: error.name,
                message:error.message
            })
        }
    }
}

export default userPatchController