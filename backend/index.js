import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import * as fs from 'fs';
import csvParser from 'csv-parser';
import bodyParser from 'body-parser';

import router from './routers/router.js';

const app = express();
app.use(cors());
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log('DB connected...'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
