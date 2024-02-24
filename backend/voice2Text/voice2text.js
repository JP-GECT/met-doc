const express = require('express')
const axios = require('axios');
const multer = require('multer');
const fs = require('fs');
const FormData = require('form-data')
const path = require('path');
const cors = require('cors');
const mongo_connection = require('../mongo-connection/mongo-connection.js')


const text2json  = require('../textToJson/t2j.js')
    
const app = express();
app.use(cors())

// const api_key = process.env.OPENAI_API_KEY
const api_key = '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'

const router = express.Router()

// Multer configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // specify the destination folder
    },
    filename: function (req, file, cb) {
        // generate a unique name for the file
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
//-------------------------
// const upload = multer({ storage: storage });
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // set the file size limit (in this case, 10MB)
}).single('audioFile'); // name attribute of the file input field



// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express route to handle file upload and API request
router.post('/', async (req, res) => {
    try {
        upload(req, res, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error uploading file.');
            }
            
            // File uploaded successfully
            const file = req.file;
            const text = req.body.text;
            console.log('Uploaded file:', file);
            console.log('Text:', text);
    
            // Here you can handle the uploaded file and text
            // For example, you can save the file to a database along with the text
            
            res.send('File uploaded successfully.');
            if (!FileExists(file)) {
                return res.status(400).json({ error: 'No file uploaded' });
            }
            const config = CreateConfig(file.path)
            axios(config)
        .then(async (result) => {
            try{
            const textFromOpenAI = await text2json(result.data.text)
            console.log(typeof textFromOpenAI.choices[0].text)
            const json_data = JSON.parse(textFromOpenAI.choices[0].text)
            mongo_connection(json_data)
            //console.log(result.data.text);
            }
            catch (err){
                console.error('Error', err)
            }
        })
        .catch(error => {
            console.error('Error:', error.response.data);
        });
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





