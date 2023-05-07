const express = require('express');
const mongoose = require('mongoose')
const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });

