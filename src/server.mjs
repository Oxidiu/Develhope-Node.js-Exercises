import express from "express"
import morgan from "morgan"
import Joi from "joi"

const app = express();
const port = 3000
app.use(morgan("dev"));
app.use(express.json())


let planets = [
    {id: 1, name: "Pamant"},
    {id: 2, name: "Marte"}
]

app.get("/api/planets", (req, res) => {
    res.status(200).json(planets)

})

app.get("/api/planets/:id", (req, res) => {
    const {id} = req.params
    const planet = planets.find(p => p.id === Number(id))
    res.status(200).json(planet)
})
const planetValidation = Joi.object({
    id: Joi.number().integer(). required(),
    name: Joi.string().required()
})
app.post("/api/planets", (req, res) => {
    const {id, name} = req.body;
    const newPlanet = {id, name}
    const verifiedNewPlanet = planetValidation.validate(newPlanet)

    if(verifiedNewPlanet.error) {
        return res.status(400).json({msg: verifiedNewPlanet.error.details[0].message})
    } else {
        planets.push(newPlanet)
    }
    res.status(201).json({
        msg: "Planeta creata"
    })

})

app.put("/api/planets/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    console.log(req.body)
    let planet = planets.find(p => p.id === Number(id))
    const updatedPlanet = {...planet, name}
    const verifiedUpdatedPlanet = planetValidation.validate(updatedPlanet)
    if (verifiedUpdatedPlanet.error) {
        return res.status(400).json({msg: verifiedUpdatedPlanet.error.details[0].message})
    }else if (updatedPlanet) {
        planets = planets.map(p => p.id === Number(id) ? p = updatedPlanet : p)
    }
    res.status(200).json({msg: "Planeta actualizata"})
})

app.delete("/api/planets/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    planets = planets.filter(p => p.id !== Number(id))
    res.status(200).json({msg: `Planeta cu id-ul ${id} a fost distrusa.`})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
