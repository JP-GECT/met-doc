const express = require('express');
const axios = require('axios');
const multer = require('multer');
const fs = require('fs');
const FormData = require('form-data')

const app = express();
const PORT = 3000;

const api_key = process.env.OPENAI_API_KEY
// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Express route to handle file upload and API request
app.post('/transcribe', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    res.send("file recieved successfully")
    const model = req.body.model || 'whisper-1';

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Read the uploaded file
    const audioData = fs.readFileSync(file.path);
    console.log(typeof audioData)

    const formData = new FormData();
    formData.append('file', audioData,{filename:'harvard.wav'});
    formData.append('model','whisper-1');

    // Make API request to OpenAI
const config = {
  method: 'post',
  url: 'https://api.openai.com/v1/audio/transcriptions',
  headers: {
    'Authorization': `Bearer ${api_key}`,
    ...formData.getHeaders() // Set Content-Type header to match form-data
  },
  data: formData
};

// Send the request
axios(config)
  .then(res => {
    console.log('Response:', res.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });

    // Respond with the API response
   // res.json(response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


