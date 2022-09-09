const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectionDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');

dotenv.config();
connectionDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

app.listen(PORT, console.log(`Server is running at Port ${PORT}`))

