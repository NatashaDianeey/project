require('dotenv').config();
const { app, PORT } = require('./server');
require('./database');

app.listen(PORT, (err) => err ? console.error(err) : console.info(`Server on port ${PORT}`));