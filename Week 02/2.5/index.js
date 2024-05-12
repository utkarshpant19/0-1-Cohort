// Create an HTTP Server using Express

const express = require("express");

const app = express();
app.use(express.json());

// Task :
// 1) Get the number of kidneys user have, and how many of them are healthy
// 2) Add a new kidney to the user
// 3) Replace an existing damage kidney of user
// 4) Delete a damaged kidney

let users = [{ name: "Utkarsh", kidney: [{ healthy: false }] }];

// GET

app.get('/', function(req, res){

    const uKidneys = users[0].kidney;
    const uHealthyKidneys = uKidneys.filter((kidney)=> kidney.healthy);
    const noOfKidneys = uKidneys.length;
    const noOfHealthyKidneys = uHealthyKidneys.length;
    const noofDamagedKidneys = noOfKidneys - noOfHealthyKidneys

    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noofDamagedKidneys
    })

})

// POST
app.post('/', function(req, res){

    const {isHealthy} = req.body;
    users[0].kidney.push({
        healthy: isHealthy
    });

    res.json({
        msg: 'Done'
    })

})

// PUT: Update every kidney to healthy
app.put('/', function(req, res){

// Put doesn't expect any input from user
    // Make all user kidneys healthy
    if(atleastOneUnhealthyKidney()){
        users[0].kidney.forEach((el)=> el.healthy = true);

        // Send an empty object
        res.json({});
    }
    else{
        res.status(411).json({
            msg: 'All kidneys are healthy'
        })
    }
   
})

// DELETE
// Remove all unhealthy kidneys
app.delete('/', function(req, res){
    // If atleast one unhealthy kidney is there then do the operation
    // else send 411 status code
    
    if(atleastOneUnhealthyKidney()){
        const healthyKidneys = [];

        for(let i=0; i< users[0].kidney.length; i++){

            if(users[0].kidney[i].healthy){
                healthyKidneys.push({healthy: true});
            }
        }

        users[0].kidney = healthyKidneys;

        res.json({
            msg: 'Done'
        })
    }
    else{
        res.status(411).json({
            msg: 'No unhealthy kidneys'
        })
    }

       
})

function atleastOneUnhealthyKidney(){

    let check = false;
    users[0].kidney.forEach((el)=>{

        if(el.healthy == false){
            check = true;
            return check;
        }
    });
    return check;
}



app.listen(3000);
