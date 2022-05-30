import { User } from "../../entities/user.entitys"
import { AppdataSource } from "../../database/data-source"

const userListServices = async () => {
    const userRepository = AppdataSource.getRepository(User)

    const users = userRepository.find()
    
    return users
}

export default userListServices