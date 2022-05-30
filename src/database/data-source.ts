import { DataSource } from "typeorm";
import { User } from "../entities/user.entitys";

require("dotenv").config();

export const AppdataSource = new DataSource({
    type:"postgres",
    host: "localhost",
    port:5432,

    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD,
    database: process.env.POSTGRES_DB,

    synchronize: false,
    logging: true,  
    entities: ["src/entities/*.ts"],
    migrations:["src/migrations/*.ts"],
})

AppdataSource.initialize()
    .then(() => {
        console.log("Data Source intialiuzation")
    })
    .catch((err) => {
    console.log("Error during Data Source Initialization", err)    
})