const express = require('express');
const app = express();
const PORT = process.env.PORT;
const router = require('../routes');
const fileUpload = require('express-fileupload');
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))
app.use(cors());
app.use('/api/v1', router);


module.exports = { app, PORT }