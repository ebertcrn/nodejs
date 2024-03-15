const express = require('express');

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/users', (req, res, next) => {
    console.log(`Users middleware`);
    res.send('<h1>Users page</h1>');
});

app.use('/', (req, res, next) => {
    console.log(`Default middleware`);
    res.send('<h1>Default page</h1>');
});

app.listen(3011);