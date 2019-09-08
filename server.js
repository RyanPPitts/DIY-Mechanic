const express = require('express');
// express - backend framework
const mongoose = require('mongoose');
// Mongoose ORM = Object relational Mappers - interact with MongoDB database
const path = require('path');
const config = require('config');

const app = express();

app.use(express.json());

// MongoDB URL - connect to MongoDB database
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// use routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));



// server static assets if in production
if (process.env.NODE_ENV === 'production') { 
    // set static folder
    app.use(express.static('client/build'));
    app.get ('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Port to run server.  Process.env.port is to run on heroku
const port = process.env.PORT || 5000;

// app to listen to port and callback for something to happen

app.listen(port, () => console.log(`Server started on port ${port}`))
