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

app.get('/api/birds/species/:speciesCode', async (req, res) => {
  const speciesCode = req.params.speciesCode;
  const eBirdApiKey = process.env.EBIRD_API_KEY;

  if (!eBirdApiKey) {
    return res.status(500).json({ error: 'eBird API key is missing' });
  }

try {
    const targetUrl = `https://api.ebird.org/v2/data/obs/GB-ENG-NTT/recent/${speciesCode}`;

    const fetchOptions = {
      headers: {
        'x-ebirdapitoken': eBirdApiKey
      }
    };

    const eBirdResponse = await fetch(targetUrl, fetchOptions);

    if (!eBirdResponse.ok) {
      throw new Error(`eBird API responded with status: ${eBirdResponse.status}`);
    }

    const birdData = await eBirdResponse.json();

    res.json(birdData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch species data' });
  }
});