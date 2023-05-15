const cors = require('cors');
const express = require('express');
const { loginRouter, userRouter, registerRouter } = require('../routers');
const { errorMiddleware } = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/customer', userRouter);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(errorMiddleware);
module.exports = app;
