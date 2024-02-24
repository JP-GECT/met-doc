const express = require('express');
const axios = require('axios');
const multer = require('multer');
const fs = require('fs');
const FormData = require('form-data')
const mongoose = require('mongoose');
const Blog = require('./models/Blog.js');
// const Project = require('./models/Project.js');
const Project = require('./models/Project.js');

// const data = {
//   "project_name": "Zil Banks Software Development Project",
//   "project_description": "The kickoff meeting for the Zil Banks software development project was held, with tasks assigned to each team member to ensure the successful development of the banking software. The team is motivated and ready to work towards achieving the project goals.",
//   "team_leader": "Mr. Virat",
//   "tasks": [
//     "Craft an engaging dashboard with various graphs (e.g., pie charts, bar graphs)",
//     "Design a smooth and intuitive navigation bar",
//     "Implement a secure and user-friendly transaction history feature",
//     "Fortify the authentication database for enhanced security",
//     "Develop a high-level encryption algorithm to ensure data protection",
//     "Create a user details component for easy account management",
//     "Enhance settings to provide users with customizable options",
//     "Ensure accuracy in the transaction history feature"
//   ],
//   "assigned": [
//     {
//       "assigned_to": "Mr. Suresh",
//       "task_name": "Crafting an engaging dashboard with various graphs",
//       "constraints": "Include various types of visualizations",
//       "time_estimation": "3 weeks",
//       "priority": "high"
//     },
//     {
//       "assigned_to": "Ramesh",
//       "task_name": "Designing a smooth and intuitive navigation bar",
//       "constraints": "User-centric design",
//       "time_estimation": "2 weeks",
//       "priority": "high"
//     },
//     {
//       "assigned_to": "Radhesh",
//       "task_name": "Implementing a secure and user-friendly transaction history feature",
//       "constraints": "Ensure security and usability",
//       "time_estimation": "3 weeks",
//       "priority": "high"
//     },
//     {
//       "assigned_to": "John",
//       "task_name": "Fortifying the authentication database",
//       "constraints": "Implement high-level security measures",
//       "time_estimation": "2 weeks",
//       "priority": "high"
//     },
//     {
//       "assigned_to": "Joseph",
//       "task_name": "Developing a high-level encryption algorithm",
//       "constraints": "Ensure maximum security standards",
//       "time_estimation": "3 weeks",
//       "priority": "high"
//     },
//     {
//       "assigned_to": "Philip",
//       "task_name": "Creating a user details component",
//       "constraints": "User-friendly interface",
//       "time_estimation": "2 weeks",
//       "priority": "high"
//     },
//     {
//       "assigned_to": "George",
//       "task_name": "Enhancing settings to provide customizable options",
//       "constraints": "Provide various customization features",
//       "time_estimation": "1.5 weeks",
//       "priority": "mid"
//     },
//     {
//       "assigned_to": "Rohan",
//       "task_name": "Ensuring accuracy in the transaction history feature",
//       "constraints": "Aiming for precision and reliability",
//       "time_estimation": "3 weeks",
//       "priority": "high"
//     },
//     {
//       "assigned_to": "Mr. Virat",
//       "task_name": "Overseeing tasks of Radhesh, Suresh, and Ramesh",
//       "constraints": "Ensuring progress and coordination",
//       "time_estimation": "Ongoing",
//       "priority": "high"
//     }
//   ],
//   "issues": [
//     "Integration of third-party API causing compatibility issues",
//     "Performance bottleneck in dashboard rendering",
//     "Cross-browser compatibility issues with navigation bar styles"
//   ],
//   "summary": "The kickoff meeting for the Zil Banks software development project was held, with tasks assigned to each team member to ensure the successful development of the banking software. The team is motivated and ready to work towards achieving the project goals.",
//   "scope": {
//     "start_date": "2024-03-01",
//     "end_date": "2024-04-15"
//   },
//   "estimated_cost": "$150,000",
//   "risks": "Tight timeline may lead to rushed development and potential compromises in quality. Technical challenges and unforeseen issues could also arise."
// }



 async function mongo_connection(data) {
  try {
      await mongoose.connect('mongodb://127.0.0.1:27017/metdoc');
      const article = new Project({
        project_name: data.project_name,
        project_description: data.project_description,
        team_leader: data.team_leader,
        tasks: data.tasks,
        assigned: data.assigned,
        issues: data.issues,
        summary: data.summary,
        scope: data.scope,
        estimated_cost: data.estimated_cost,
        risk: data.risks
      });
      // await article.save();
      console.log('connected')

    
  } catch (error) {
      console.error("Error:", error);
  } finally {
      mongoose.disconnect(); // Disconnect from the MongoDB server
  }
}

mongo_connection();


const app = express();
const PORT = 8000;

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


