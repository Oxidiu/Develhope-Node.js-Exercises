import express from "express"
import morgan from "morgan"

const app = express();
const port = 3000
app.use(morgan("dev"));
app.use(express.json());
import {getAll, getOneById, create, updateById, deleteById} from "./controllers/planets.mjs"




app.get("/api/planets", getAll)

app.get("/api/planets/:id", getOneById)

app.post("/api/planets", create)

app.put("/api/planets/:id", updateById)

app.delete("/api/planets/:id", deleteById)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
