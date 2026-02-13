const express = require('express');
require('dotenv').config({ path: '.env' });

const app = express();
const port = 3000;

const URI = process.env.MONGODB_URI;
const PORT = Number(process.env.PORT || 4000);
const NODE_ENV = process.env.NODE_ENV || 'production';

const hostname = NODE_ENV === 'development' ? 'localhost' : '0.0.0.0';


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
}); 