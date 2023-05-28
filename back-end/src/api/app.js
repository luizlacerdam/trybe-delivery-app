const cors = require('cors');
const express = require('express');
const path = require('path');
const { loginRouter, userRouter, registerRouter, saleRouter, adminRouter } = require('../routers');
const { errorMiddleware } = require('../middlewares/errorMiddleware');
const { UserController } = require('../controllers');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/images', express.static(path.resolve(`${__dirname}/../images`)));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/customer', userRouter);
app.use('/', saleRouter);
app.use('/administrator', adminRouter);

app.get('/sellers', UserController.getSellers);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(errorMiddleware);
module.exports = app;
