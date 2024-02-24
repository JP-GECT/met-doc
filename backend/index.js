const transcribe = require('./voice2Text/voice2text.js')
// const mongo_connection = require('./mongo-connection/mongo-connection.js')
const cors = require('cors')
const create_new_project = require('./mongo-connection/insert_into_db/routes/create_new_project.js')




const express = require('express');
const app = express();
app.use(cors())
const PORT = 8000;
app.use('/transcribe', transcribe);
app.use('/createnewproject', create_new_project)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


