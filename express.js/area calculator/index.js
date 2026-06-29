const express = require('express');
const app = express();

app.use(express.static(__dirname));
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
    const base = parseFloat(req.body.base);
    const height = parseFloat(req.body.height);

    if (Number.isNaN(base) || Number.isNaN(height)) {
        return res.status(400).json({ error: 'Please enter valid numbers for base and height.' });
    }

    const area = 0.5 * base * height;
    res.json({
        area: area.toFixed(2),
        message: `Triangle area using base ${base} and height ${height}`,
    });
});

app.post('/circle', (req, res) => {
    const radius = parseFloat(req.body.radius);

    if (Number.isNaN(radius)) {
        return res.status(400).json({ error: 'Please enter a valid number for radius.' });
    }

    const area = Math.PI * radius * radius;
    res.json({
        area: area.toFixed(2),
        message: `Circle area using radius ${radius}`,
    });
});

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});