const express = require('express');

var app = express();

app.get('/', (req, res) => {

    res.send('Hello Express!!!!!');
    res.send({
        firstName: 'Sachin',
        lastName: 'Mundhe'
    });

});

app.listen(3000);