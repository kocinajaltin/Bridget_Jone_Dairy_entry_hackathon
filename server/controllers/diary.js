const Diary = require('../models/Diary')

const index = async (req, res) => {
    try {
        const diary = await Diary.showAll();
        res.status(200).send(diary)

    }catch (err) {
        res.status(500).send({err:'Server Error'})
    }
}

const show = async (req,res) =>{
    const id = req.params.id;
    try {
        const diary = await Diary.show(id)
        res.status(200).send(diary)

    }catch (err){
        res.status(404).send({Error: err.message})
    }
}

const create = async (req,res) =>{
    try {
        const newDiary = await Dairy.create (req.body);
        res.status(201).send(newDiary)

    }catch(err) {
        res.status(409).send ({error: err})
    }
}

const update = async (req, res) => {
    const id = req.params.id

    try {
        const diary = await Dairy.show(name)
        const result = await Dairy.update(req.body)

        res.status(200).send(result)
    } catch(err) {
        res.status(404).send({ error: err })
    }
}

const destroy = async (req, res)=>{
    const id = req.params.id
    try {
        const diary = await Fruit.show(id)
        await diary.destroy()
        res.sendStatus(204)

    }catch (err){
        res.status(404).send({error: err})
    }
}



module.exports = { index, show, create, update, destroy } 