const express = require('express');
const fs = require('fs');
const path = require('path');



fs.readdir('Files', (err, files)=>{

    files.forEach((file)=>{
        
        console.log(file);
        let fileDetails = fs.lstatSync(path.resolve('Files', file));
        // console.log(fileDetails);
    })
} )



// const app = express();

// const port = 3000;

// app.listen(port);





