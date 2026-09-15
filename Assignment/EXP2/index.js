
import express from 'express';
const app = express();
app.use(express.json());
let users=fetch('product.json').then(res=>res.json()).then(data=>{users=data;console.log(users);}).catch(err=>console.log(err));

app.get('/users',(req,res)=>{
    res.json(users);
});
app.post('/users',(req,res)=>{
const user={
    id:users.length+1,
    name:req.body.name,
    email:req.body.email
};
users.push(user);
res.json(user);
});

app.put('/users/:id',(req,res)=>{
    let user=users.find(u=>u.id==req.params.id);
    user.name=req.body.name;
    user.email=req.body.email;
    res.send("user updated successfully");
     
    res.json(user);
    
    app.delete('/users/:id',(req,res)=>{
        users=users.filter(u=>u.id!=req.params.id);
        res.send("user deleted successfully");})
});

app.listen(8000,()=>{
    console.log('Server is running on port http://localhost:8000');
});
