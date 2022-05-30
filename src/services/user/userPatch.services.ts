import { AppdataSource } from "../../database/data-source"
import { User } from "../../entities/user.entitys"
import bcrypt from "bcrypt"
import { IUserPacth } from "../../interfaces/users"

const userPacthServices = async (data:IUserPacth, id:string) => {
    
    const userRepository = AppdataSource.getRepository(User)
    
    const users = await userRepository.find()

    const account = users.find(user => user.id === id)

    if (!account) {
        throw new Error("ID Already Exixts")
    }

    if (data.name){
        await userRepository.createQueryBuilder()
        .update(User)
        .set({name:data.name})
        .where(`id= :id`, {id:id})
        .execute()
    } 
     if (data.email){
        await userRepository.createQueryBuilder()
        .update(User)
        .set({email:data.email})
        .where(`id= :id`, {id:id})
        .execute()
    } 
    if (data.age){
        await userRepository.createQueryBuilder()
        .update(User)
        .set({age:data.age})
        .where(`id= :id`, {id:id})
        .execute()

    } 
    if (data.password){
        await userRepository.createQueryBuilder()
        .update(User)
        .set({password:data.password})
        .where(`id= :id`, {id:id})
        .execute()
    } 

    await userRepository.createQueryBuilder()
        .update(User)
        .set({updates_at: new Date()})
        .where(`id= :id`, {id:id})
        .execute() 


    return true
}

export default userPacthServices