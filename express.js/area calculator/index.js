const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    
    res.sendFile(__dirname + '/index.html');
});

app.get('/circle', (req, res) => {
    res.sendFile(__dirname + '/circle.html');
});

app.get('/triangle', (req, res) => {
    res.sendFile(__dirname + '/triangle.html');
});

app.post('/triangle', (req, res) => {
    const base = req.body.base;
    const height = req.body.height;
    const area = 0.5 * base * height;
    res.send(`The area of the triangle is: ${area}`);
});

app.post('/circle', (req, res) => {
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`The area of the circle is: ${area}`);

});

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});