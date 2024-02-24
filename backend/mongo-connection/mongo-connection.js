const mongoose = require('mongoose');
const Blog = require('../models/Blog.js')
// const Project = require('./models/Project.js');
const Project = require('../models/Project.js');


//error :TypeError: Cannot read properties of undefined (reading 'project_name') because of data is not defined
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
      await article.save();
      console.log('connected')

    
  } catch (error) {
      console.error("Error:", error);
  } finally {
      mongoose.disconnect(); // Disconnect from the MongoDB server
  }
}

module.exports = mongo_connection;