import { User } from "../../entities/user.entitys";
import { IUsercreate } from "../../interfaces/users";
import { AppdataSource } from "../../database/data-source";
import bcrypt from "bcrypt"

const userCreateService = async (data:IUsercreate)=>{
    const userRepository = AppdataSource.getRepository(User)

    const users = await userRepository.find()

    const emailAlreadyExists = users.find(user=> user.email === data.email)

    if (emailAlreadyExists){
        throw new Error("Email Already Exixts")
    }

    const user = new User()
    user.name = data.name
    user.age = data.age
    user.email =data.email
    user.password = bcrypt.hashSync(data.password, 10)

    userRepository.create(user)
    await userRepository.save(user)


    return user
}


export default userCreateService