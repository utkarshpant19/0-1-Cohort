const express = require("express");
const zod = require("zod");


const userSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
});

function validateInput(obj){

    // Validating obj using zod
    const response = userSchema.safeParse(obj);
    console.log(response);

}
const obj = {
    email: 'utkarsh@gmail.com',
    password: '123457'
}
validateInput(obj);
