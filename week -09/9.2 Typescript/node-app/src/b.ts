import { User } from "./interface/User";

const user: User = {
    firstName: "Utkarsh",
    lastName: "Pant",
    age: 28,
    isMarried: false
}

const isLegal = (user: User)=>{

    return user.age > 18;
}

isLegal(user);