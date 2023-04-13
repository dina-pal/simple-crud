const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const router = require('./routes/routes');

const app = express();

app.use([express.json(), cors(), morgan('dev')]);

app.use('/api/v1/', router);



const port = process.env.PORT | 8000;
app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
    config.connectDB();
})