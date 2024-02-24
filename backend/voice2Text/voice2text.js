const express = require('express')
const axios = require('axios');
const multer = require('multer');
const fs = require('fs');
const FormData = require('form-data')

const text2json  = require('../textToJson/t2j.js')
    


const api_key = process.env.OPENAI_API_KEY

const router = express.Router()

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
router.post('/', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        res.send("file recieved successfully")

        if (!FileExists(file)) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const config = CreateConfig(file.path)

        axios(config)
        .then(async (result) => {
            try{
            const textFromOpenAI = await text2json(result.data.text)
            console.log(textFromOpenAI)
            //console.log(result.data.text);
            }
            catch (err){
                console.error('Error', err)
            }
        })
        .catch(error => {
            console.error('Error:', error.response.data);
        });
    } 
    catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const FileExists = (file) => {
    if (!file)
        return false
    return true
}

const CreateConfig = (filePath) => {
    const audioData = fs.readFileSync(filePath);
    console.log(typeof audioData)

    const formData = new FormData();
    formData.append('file', audioData,{filename:'harvard.wav'});
    formData.append('model','whisper-1');
    const config = {
    method: 'post',
    url: 'https://api.openai.com/v1/audio/transcriptions',

    headers: {
        'Authorization': `Bearer ${api_key}`,
        ...formData.getHeaders() // Set Content-Type header to match form-data
    },
    data: formData
    };
    return config
}

module.exports = router





