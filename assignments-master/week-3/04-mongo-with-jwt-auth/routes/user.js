const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const SECRET_KEY = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const {username, password} = req.body;

    const user = await User.create({
        username,
        password
    });

    console.log(user);
    res.json({
        messaage: "User created successfully"
    })


});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic

    const {username, password} = req.body;
    const user = await User.findOne({
        username,
        password
    });

    console.log(user);

    // If user already exists, then signIn
    if(user){
        // Generate a token
        const token = jwt.sign({username}, SECRET_KEY);
        res.json({
            token
        })
    }
    else{
        res.json({
            message: "User doesn't exist"
        })
    }

    
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic

    const courses = await Course.find({});
    res.json({
        courses
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    // Get the user from the token and update the purchased course array

    const courseId = req.params.courseId;

    // Verify the token
    try{
       
        const username = req.username;
        console.log(username);

        await User.updateOne({
            username
        },
        {
            "$push": {
                purchasedCourses: courseId
            }
        }
        )

        res.json({
            message: 'Course purchased successfully'
        })

    }
    catch(err){
        res.json({
            message: "Some error in purchasing the course"
        })
    }
  


});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
   const user = await User.findOne({
        username
    });

    console.log(user.purchasedCourses);

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })


    res.json({
       purchasedCourses: courses
    })

});

module.exports = router