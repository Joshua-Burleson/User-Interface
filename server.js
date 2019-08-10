const express = require('express');
const app = express();
const path = require("path");

app.use(express.static('./great-idea-website'));

app.get('/', (req, res) => {
    res.end('./index.html');
});

app.get('/stretch', (req, res) => {
    res.sendFile(path.join(__dirname + '/stretch1.html'));
});

app.get('/vision', (req, res) => {
    res.sendFile(path.join(__dirname + '/great-idea-website/vision.html'));
});

app.get('/stretch-with-background', (req, res) => {
    res.sendFile(path.join(__dirname + '/great-idea-website/stretch2.html'));
})

app.listen(4000, () => {
    console.log('Listening');
});