require('dotenv').config();

const express = require('express');
const allRoutes = require('./routes');
const { connectDb } = require('./db/databaseConnection');

const app = express();
connectDb();

app.use(express.json());

app.use('/api/stock', allRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});