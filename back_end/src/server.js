import express from 'express';
import bodyParser from 'body-parser';

import ViewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';

require('dotenv').config();

const app = express();

// config app

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

ViewEngine(app);
initWebRoutes(app);

connectDB();

// lay tham so PORT trong file .env
const port = process.env.PORT || 3000;
// port === undefine ? 3000 : PORT

app.listen(port, () => {
    // callback
    console.log('backend Nodejs is running on the port : ' + port);
});
