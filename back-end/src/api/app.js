const cors = require('cors');
const express = require('express');
const { loginRouter, userRouter } = require('../routers');
const { errorMiddleware } = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use('/register', userRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(errorMiddleware);
module.exports = app;
