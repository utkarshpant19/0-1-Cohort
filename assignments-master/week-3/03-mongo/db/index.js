const mongoose = require('mongoose');

// Connect to MongoDB
const MONGODB_URL = "mongodb+srv://utkarshpant1994:feBcVebJWLM2RnHc@cluster0.hep5gr7.mongodb.net/course-selling-app"
mongoose.connect(MONGODB_URL);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course' // Refer the Course Table
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String, 
    description: String, 
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}