const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../config')


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    try{
        await Admin.create({
            username,
            password
        });
    
        res.json({
            msg: 'Admin is created Succcessfully'
        })
    }
    catch(err){

        res.status(403).json({
            msg: err.message
        })
    }

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    console.log('Secret key ',SECRET_KEY);

    // Check if username exists
   const user =  await Admin.findOne({
        username
    });

    console.log('User ',user);

    if(user){
        // Sign the jwt token
        const token = jwt.sign({
            username
        }, SECRET_KEY);

        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            message: "Username doesn't exist"
        })
    }




});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const {title, description, price, imageLink} = req.body

    const course = await Course.create({
        title,
        description,
        price,
        imageLink
    })
    console.log(course);

    res.json({
        message: "Course created successfully",
        courseId: course._id 
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const courses = await Course.find({});

    res.json({
        courses
    })
});

module.exports = router;