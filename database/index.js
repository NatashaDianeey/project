const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => 
    err ? console.error(err) : console.info('Database Connected')
)