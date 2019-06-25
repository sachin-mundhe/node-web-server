const express = require('express');

var app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.send({
        firstWord: 'Hello',
        secondWord: 'World'
    });

});

app.listen(port);