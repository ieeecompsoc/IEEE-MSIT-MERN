const express = require('express');
const cors = require('cors');
const compression = require('compression')
const mongoConnect = require('./db');
const authUser = require('./routes/auth');

mongoConnect()

const app = express();
let port = 8000;

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(compression())
app.use('/images', express.static('images'))
app.use('/events', require('./routes/events'));
app.use('/api/user', authUser);

app.listen(port, () => { // just as server, our app also listen and both app and server listen() function accept 3 parameters, 2 can be given where host will be considered localhost(default)
    console.log(`The application started successfully on port ${port}`);
})
