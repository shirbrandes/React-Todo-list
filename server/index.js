const express = require('express')
const cors = require("cors")
const { myQuery } = require('./dbConfig')
const { connectToMongoDB } = require('./dbConfigMongo')
const { TodoModel, initDataBase } = require('./models/todos')
const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
    }))

//uncomment this line when you use MongoDB(mongoose):
//  connectToMongoDB();


// uncomment this only ones, at the first run on MongoDB(mongoose)(and then comment this line again)
//  initDataBase() 

app.get('/', async (req, res) => {
    try {
        const todos = await myQuery(`SELECT * From todos`)
        //uncomment this line when you use MongoDB(mongoose):
        // const todos = await TodoModel.find({})
        res.send(todos)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)

    }
})

app.post('/add', async (req, res) => {
    try {
        const { task } = req.body
        if (!task) {
            return res.status(400).send({ err: "missing some info" })

        }
        await myQuery(`INSERT INTO todos (task) VALUES("${task}")`)
        //uncomment those lines when you use MongoDB(mongoose):
        // const singleTodo = new TodoModel({task})
        // await singleTodo.save()
        res.send({ msg: "Added" })
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

app.delete('/:id', async (req, res) => {
    try {
        await myQuery(`DELETE FROM todos WHERE id=${req.params.id}`)
        //uncomment this line when you use MongoDB(mongoose):
        // await TodoModel.findByIdAndRemove(req.params._id)
        res.status(201).send({ msg: "The task has been deleted 🗑" })
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

app.put('/status/:id', async (req, res) => {
    try {
        const query = `UPDATE todos SET status = !status WHERE id = ${req.params.id}`
        //uncomment those lines when you use MongoDB(mongoose):
        // const singleTodo = await TodoModel.findById(req.params._id)
        // singleTodo.status = !singleTodo.status
        // await singleTodo.save()
        await myQuery(query)
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})




app.listen(1000, () => console.log("server up and running"))