import {Router} from "express"

const  routes = Router()

import userCreateController from "../controllers/users/userCreate.controlles"
import userDeleteControllers from "../controllers/users/userDelete.controllers"
import userListController from "../controllers/users/userList.contrroles"
import userListOneConteoller from "../controllers/users/userListOne.controller"
import userPatchController from "../controllers/users/userPatch.controller"


routes.post("/users", userCreateController)
routes.get("/users", userListController)
routes.get("/users/:id", userListOneConteoller)
routes.patch("/users/:id", userPatchController)
routes.delete("/users/:id", userDeleteControllers)

export default routes

