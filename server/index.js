const express = require("express");
const path = require('path');
const cors = require('cors');
const app = express();

// node serve the files for our react app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(cors());
// handle gt request 
app.get('/api', (req, res) => {
    res.json({message: "hello from server!"});
});

//all other GET requests not handled before will return our react app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});







app.listen(3001);