export interface IUser{
    id:string
    name:string
    email:string
}

export interface IUsercreate{
    name:string
    email:string
    password: string
    age: number
}

export interface IUserLogin{
    email:string
    password: string
}

export interface IUserPacth {
    name?:string
    email?:string
    password?: string
    age?: number
}