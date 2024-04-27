const {Router} = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup',  async (req, res) => {
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

router.get('/users', adminMiddleware, async (req, res)=>{

    const admins = await Admin.find({});
    console.log(admins);

    res.json({
        adminUsers: admins
    })

})

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const {title, description, imageLink, price} = req.body


        try{
           const newCourse =  await Course.create({
                title,
                description,
                imageLink,
                price
            });
        
            console.log(newCourse);
            res.json({
                message: "Course created successfully",
                courseId: newCourse._id
            })
        }
        catch(err){
            res.status(403).json({
                msg: 'Course creation failed'
            })
        }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
   
    // Get all the coursess
    const allCourses = await Course.find({
    });

    res.json({
        courses: allCourses
    })


});

module.exports = router;