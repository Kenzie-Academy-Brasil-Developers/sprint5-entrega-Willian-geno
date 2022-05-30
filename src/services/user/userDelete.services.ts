import { AppdataSource } from "../../database/data-source"
import { User } from "../../entities/user.entitys"

const userDeleteServices = async (id:string) => {
    const userRepository =  AppdataSource.getRepository(User)

    const users = await userRepository.find()

    const account = users.find(user => user.id === id)
    

    if (!account) {
        throw new Error("ID Already Exixts")
    }

    await userRepository.delete(account!.id)

    return true
}

export default userDeleteServices