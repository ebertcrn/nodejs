const express = require('express');

const app = express();

// use() method allow us to add a new middleware function
// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next(); // next() allows the request to continue to the next middleware in line
// });

app.use('/add-product', (req, res, next) => {
    console.log('Add-product!');
    res.send('<h1>Add-product page!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);