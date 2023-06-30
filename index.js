const express = require('express');
const app = express();

app.use(express.json());

const people = [
    {id: 1, name: 'Rodrigo', age: 20, informaticEngineer: true},
    {id: 2, name: 'Nestor', age: 26, informaticEngineer: true},
    {id: 3, name: 'Fabiola', age: 20, informaticEngineer: false}
]

app.get('/', (req, res) => {
    res.send('API para tarea del despliegue de API');
});

app.get('/api/people', (req, res) => {
    res.send(people);
});

app.get('/api/people:id', (req, res) => {
    const specificPeople = peole.find(c => c.id === parseInt(req.params.id));
    if (!specificPeople) return res.status(404).send('Esta persona no se ha encontrado :c'); 
});


// POST
app.post('/api/people', (req, res) => {
    const specificPeople = {
        id: people.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        informaticEngineer: (req.body.informaticEngineer === 'true')
    };

    people.push(specificPeople);
    res.send(specificPeople);
});


const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));