import express from 'express';
const app = express();
app.use(express.json());
let users = [
    {id: 1,name: "Rahul Kumar",email: "rahul@gmail.com"},
    {id: 2,name: "Rishabh Kumar",email: "rishabh@gmail.com"}
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    res.json(user);
});

app.post('/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(user);
    res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);

    
});

app.delete('/users/:id', (req, res) => {
        users = users.filter(a=>a.id!=Number(req.params.id));
        res.send("User deleted successfully");
});

// app.delete('/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const index = users.findIndex(user => user.id === id);
//     if (index === -1) {
//         return res.status(404).json({
//             message: "User not found"
//         });
//     }
//     users.splice(index, 1);
//     res.json({
//         message: "User deleted successfully"
//     });
// });

app.get('/', (req, res) => {
    res.send('Server is working!');
});

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});