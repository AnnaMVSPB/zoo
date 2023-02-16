require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const sessionConfig = require('./config/session');

const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(cors(corsOptions));

const apiAnimalsRoute = require('./routes/animals.routes');
const apiUsersRoute = require('./routes/users.routes');
const apiAuthRoute = require('./routes/auth.routes');

app.get('*', (req, res) => { res.sendFile(path.resolve('../frontend/build/index.html')); });
app.use('/api/animals', apiAnimalsRoute);
app.use('/api/users', apiUsersRoute);
app.use('/api/auth', apiAuthRoute);

app.listen(PORT, () => {
  console.log(`Сервер запущу на ${PORT}щу`);
});
