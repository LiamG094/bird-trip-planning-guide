const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const port = (process.env.PORT || 5000);

app.listen(port, () => { console.log(`Server running on ${port}`) });
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Companion Server is live!' });
});