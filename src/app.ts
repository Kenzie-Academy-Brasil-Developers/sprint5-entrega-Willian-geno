import express from "express"
import routes from "./routes/users"

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3000)