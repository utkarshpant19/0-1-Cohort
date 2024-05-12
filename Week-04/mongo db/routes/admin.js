const express = require('express');

const router = express.Router();


router.get('/courses', function(req, res, next){

    res.json({
        msg: 'Courses fetched successfully!'
    })
});

module.exports = router;