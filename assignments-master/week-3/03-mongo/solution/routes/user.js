const {Router} = require ('express');
const router = Router ();
const userMiddleware = require ('../middleware/user');
const {User, Course} = require ('../db');

// User Routes
router.post ('/signup', async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  try {
    const newUser = await User.create ({
      username,
      password,
    });

    res.json ({
      message: 'User created successfully',
    });
  } catch (err) {
    res.status (400).json ({
      message: 'Error creating user',
      error: err.message,
    });
  }
});

router.get ('/courses', async (req, res) => {
  // Implement listing all courses logic

  const response = await Course.find ({});
  res.json ({
    courses: response,
  });
});

router.post ('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic

  //1. Get the user
  const username = req.headers.username;

  //2. Get the course
  const courseId = req.params.courseId;
  // Push this course to the purchased array of that user

  //3. Update the user's purchased courses

  try {
    await User.updateOne (
      {
        username,
      },
      {
        "$push" : {
        purchasedCourses : courseId,
        },
      }
    );
    res.json ({
      message: 'Course purchased successfully',
    });
  } catch (err) {
    console.log (err);
  }
});

router.get ('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  // Find returns an array, findOne returns a Single object which matches the condition
 const user = await User.findOne({
    username: req.headers.username
 });

 console.log(user.purchasedCourses);
 const courses = await Course.find({
    _id: {
        "$in": user.purchasedCourses
    }
    
 })

console.log(courses); 

 res.json({
    purchasedCourses: courses
 })
});

module.exports = router;
