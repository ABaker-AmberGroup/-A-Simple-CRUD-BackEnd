// ---------------
// Based Veriables
// ---------------
require('dotenv').config({path: './config.env'});
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = require('./app');


const PORT = process.env.PORT || 5000;
// ---------------


// ---------------
// Start Express App
// ---------------
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB Connected Successfully!'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//   .then(() => {
//     app.listen(port, () => {
//       console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
//     });
//   })

// ---------------