const express = require('express');
const path = require('path');
const fs = require('fs');
const notes = require('./db/db.json');
const uuid = require('uuid');
// const resume = require('./Extra-Tools/files/Nick+Cooper+Resume+2021-2022.pdf');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

// app.get('/assets/reset.css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'assets/reset.css'));
// });

// app.get('/assets/style.css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'assets/style.css'));
// });

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/script.js'));
});

// app.get('/Extra-Tools/files/Nick+Cooper+Resume+2021-2022.pdf', (req, res) => {
//     res.sendFile(path.join(__dirname, '/Extra-Tools/files/Nick+Cooper+Resume+2021-2022.pdf'));
// });



app.listen(PORT, () => 
    console.log(`Example app listening at http://localhost:${PORT}`)
);