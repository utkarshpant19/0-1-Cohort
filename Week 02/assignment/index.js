const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', function(req, res){

    res.json({msg: 'Hello World'});
})

app.get('/files/:fileName', function(req, res){

    const {fileName} = req.params
    readFile(fileName);
    res.json({

    })
})

// Reading data from File
function readFile(filePath){
    fs.readFile(filePath, 'utf-8', (err, data)=>{

        if(err){
            console.log(err)
            return;
        }
        console.log(data); // Content of the file
    })
}

// Writing data to File

const content = 'Hi Roger!!, Novak here';

function writeFile(filePath, content){

    fs.writeFile(filePath, content, function(err, data){

        if(err){
            throw new Error('File Not Found');
        }
        console.log('File write succcessfully');
    })
}

writeFile('file.txt', content);

// Creating Directory
fs.mkdir('newFolder', function(err,data){

    if(err){
        throw new Error("Can't create new Folder");
    }
    console.log('Folder Created succcessfully');
})



app.listen(3000);