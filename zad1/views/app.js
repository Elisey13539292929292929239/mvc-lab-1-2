const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/student', (req, res) => {
    res.sendFile(__dirname + '/student.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});