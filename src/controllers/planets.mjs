import Joi from 'joi'

let planets = [
    {id: 1, name: "Pamant"},
    {id: 2, name: "Marte"}
]

const getAll = (req, res) => {
    res.status(200).json(planets)
}

const getOneById = (req, res) => {
    const {id} = req.params
    const planet = planets.find(p => p.id === Number(id))
    res.status(200).json(planet)
}

let planetValidation = Joi.object({
    id: Joi.number().required(). integer(),
    name: Joi.string().required().min(3).max(100)
})

const create = (req, res) => {
    const {id, name} = req.body
    const newPlanet = {id, name}
    const validNewPlanet = planetValidation.validate(newPlanet)

    if(validNewPlanet.error) {
        return res.status(400).json({msg:validNewPlanet.error.details[0].message})
    } else if (planets.find(planet => planet.id === id)) {
        res.status(400).json({message: "O alta planeta cu acelasi ID deja exista, alege alt ID"})
    } else {
        planets = [...planets, newPlanet]
        res.status(201).json({msg: "Planeta a fost creata"})
    }
}

const updateById = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const newPlanet = {id, name};
    const validPlanet = planetValidation.validate(newPlanet)

    if(validPlanet.error) {
        return res.status(400).json({msg: validPlanet.error.details[0].message})
    } else if (planets.find(planet => planet.id === Number(id))) {
        planets = planets.map(planet => planet.id === Number(id) ? {...planet, name} : planet)
        res.status(200).json({msg: "Planeta a fost actualizata"})
    }else {
        res.status(400).json({msg: "Planeta nu exista"})
    }
}

const deleteById = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    planets = planets.filter(planet => planet.id !== Number(id))

    res.status(200).json({msg: "Planeta a fost stearsa"})
}

export {getAll, getOneById, create, updateById, deleteById}
