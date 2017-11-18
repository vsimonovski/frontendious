const express = require('express');
const app = express();

app.get('/api/hello-world', (req, res) => {
    res.send('hello from api!');
});

app.listen('3001');
