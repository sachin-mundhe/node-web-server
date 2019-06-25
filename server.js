const express = require('express');

var app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.send('Hello Express!!!!!');
    res.send({
        firstName: 'Sachin',
        lastName: 'Mundhe'
    });

});

app.listen(port);