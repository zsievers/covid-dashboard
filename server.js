const express = require('express');
const connectDB = require('./config/db');
const app = express();

// connect db
connectDB();

app.get('/', (req, res) => res.json({ msg: 'Welcome to COVID-19 Dashboard' }));

// define route
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server reading on port ${PORT}`));
