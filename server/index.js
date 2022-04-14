const express = require('express');
const mongoConnect = require('./db');

mongoConnect()

const app = express();
let port = 80;

app.use(express.json())
app.use('/events', require('./routes/events'))

app.listen(port, () => { // just as server, our app also listen and both app and server listen() function accept 3 parameters, 2 can be given where host will be considered localhost(default)
    console.log(`The application started successfully on port ${port}`);
})
