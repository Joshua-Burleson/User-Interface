const express = require('express');
const app = express();

app.use(express.static('./great-idea-website'));

app.get('/', (req, res) => {
    res.end('./index.html');
});

app.listen(4000, () => {
    console.log('Listening');
});