const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();
//like bodyparser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Conas a ta tu'));

app.use('/api/user', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
