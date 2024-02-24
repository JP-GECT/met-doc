const transcribe = require('./voice2Text/voice2text.js')
const mongo_connection = require('./mongo-connection/mongo-connection.js')

mongo_connection();
const express = require('express');
const app = express();
const PORT = 8000;
app.use('/transcribe', transcribe);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


