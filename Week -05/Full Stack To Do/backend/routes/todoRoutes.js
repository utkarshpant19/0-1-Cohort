const express = require("express");
const router = express.Router();

router.use(express.json())


// Get all the todos
router.get('/todos', function(req, res){

    res.json({
        msg: "Todos fetched successfully"
    })
})

// Add a new Todo

router.post('/todo', function(req, res){

});

// Mark as completed
router.put('/completed', function(req, res){
    
})

module.exports = router;