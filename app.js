const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', function (res, res) {
    res.send('ok');
})

app.listen(port, function () {
    console.log('App listening at port %s', port);
});
