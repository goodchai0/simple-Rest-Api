
import {v4 as uuidv4} from 'uuid';
uuidv4();
let users=[

]
export const patchInfo=(req,res)=>{
    const {id}=req.params;
    const {firstName,lastName,age}=req.body;
    
    const user=users.find((user)=>user.id===id)

    if(firstName){
        user.firstName=firstName;
    }
    if(lastName){
        user.lastName=lastName;
    }
    if(age){
        user.age=age;
    }

    res.send(`user with id ${id} has been updated`)
}

export const getInfo=(req,res)=>{
    res.send(users)
}

export const postInfo=(req,res)=>{
    
    const user=req.body;
    const userId=uuidv4();
    const userWithId={...user,id:userId}
    
    users.push(userWithId);
    res.send(`user with name ${user.firstName} added to the database!`);
}

export const createInfo =(req,res)=>{
    const {id}=req.params;
    const foundUser=users.find((user)=>user.id===id)
    res.send(foundUser)
}

export const deleteInfo=(req,res)=>{
    const {id}=req.params;

    users=users.filter((user)=>user.id!==id)

    res.send(`user with the ${id} is deleted`)
}