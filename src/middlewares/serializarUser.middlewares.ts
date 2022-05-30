import { User } from "../entities/user.entitys"

const serializarUserMiddlewrares = (user?:User) => {

    if (user){
        const newUser = {
            name:user.name,
            email:user.email,
            age:user.age,
            id:user.id,
            updates_at:user.updates_at,
            created_at:user.created_at
        }
        return newUser
    }

}

export default serializarUserMiddlewrares