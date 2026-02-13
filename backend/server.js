const express = require('express');
require('dotenv').config({ path: '.env' });

const app = express();
const port = 4000;

const URI = process.env.MONGODB_URI;
const PORT = Number(process.env.PORT || 4000);
const NODE_ENV = process.env.NODE_ENV || 'production';

const hostname = NODE_ENV === 'development' ? 'localhost' : '0.0.0.0';

//A enlever en prod
const cors = require('cors');
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
}); 