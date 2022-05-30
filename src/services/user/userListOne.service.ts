import { AppdataSource } from "../../database/data-source";
import { User } from "../../entities/user.entitys";

const userListOneServece = async (id:string) =>{
    const userRepository = AppdataSource.getRepository(User)

    const users = await userRepository.find()

    const accaount = users.find(user => user.id === id)

    if (!accaount) {
        throw new Error("ID Already Exixts")
    }

    return accaount
}

export default userListOneServece
