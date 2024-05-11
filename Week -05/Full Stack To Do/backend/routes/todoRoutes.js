const express = require("express");
const { createToDo, updateToDo } = require("../types");
const router = express.Router();

router.use(express.json())


// Get all the todos
router.get('/todos', function(req, res){

    res.json({
        msg: "Todos fetched successfully"
    })
})

// Add a new Todo

// body:
// {
//     title: String,
//     description: String
// }
router.post('/todo', function(req, res){

   const createPayLoad = req.body;
   const parsedPayLoad = createToDo.safeParse(createPayLoad)

    if(!parsedPayLoad.success){
        res.status(411).json({
            message: "Incorrect Inputs format"
        })
        return;
    }
        // Put it in Mongo db
 

});

// Mark as completed
router.put('/completed', function(req, res){

    const payLoad = req.body
   const parsedPayLoad =  updateToDo.safeParse(payLoad);
    if(!parsedPayLoad.success){
        res.status(401).json({
            message: "Incorrect Id format"
        })
        return;
    }
   
        // Put it in mongodb
    
    
})

module.exports = router;