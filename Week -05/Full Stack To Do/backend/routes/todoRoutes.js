const express = require("express");
const { createToDo, updateToDo } = require("../types");
const { toDo } = require("../db");
const router = express.Router();

router.use(express.json())


// Get all the todos
router.get('/todos', async function(req, res){

    const todos = await toDo.find({});

    res.json({
        todos,
    })
})

// Add a new Todo

// body:
// {
//     title: String,
//     description: String
// }
router.post('/todo', async function(req, res){

   const createPayLoad = req.body;
   const parsedPayLoad = createToDo.safeParse(createPayLoad);
   console.log('Parsed Payload ', parsedPayLoad);

    if(!parsedPayLoad.success){
        res.status(411).json({
            message: "Incorrect Inputs format"
        })
        return;
    }
        // Put it in Mongo db

        const {title, description} = parsedPayLoad.data;
        const createdToDo = await toDo.create({
            title,
            description,
        })

        console.log('Created To do', createdToDo);

        res.json({
            message: "To Do created"
        })
 

});

// Mark as completed
router.put('/completed', async function(req, res){

    const payLoad = req.body
   const parsedPayLoad =  updateToDo.safeParse(payLoad);
    if(!parsedPayLoad.success){
        res.status(401).json({
            message: "Incorrect Id format"
        })
        return;
    }
   
        // Put it in mongodb
        await toDo.updateOne({
            _id: req.body.id
        },
        {
            completed: true
        }
        )

        res.json({
            message: 'To do upated successfull with id '+req.body.id
        })
    
    
})

module.exports = router;