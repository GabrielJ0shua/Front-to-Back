import express, { response } from 'express';

const app = express();
const users = [
    'Joshua',
    'Dautonico',
    'Jorge',
    'teste',
    'teste2'
];

app.get('/users', (request, response)=> {
    const search = String(request.query.serach);
    const filteredUsers = search ? users.filter(user => user.includes(search)): users;
    return response.json(users);
});

app.get ('/users/:id', (request, response)=> {
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user);
});

app.post('/users', (resquest, response) =>{
    const user = {
        name: 'Joshua',
        email:'akakakkinho@gg.com'
    };

    return response.json(user);
});


app.listen(3333);