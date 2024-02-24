const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const projectSchema = new Schema({
  project_name: String,
  project_description: String,
  team_leader: String,
  tasks:[String],
  assigned:{
    assigned_to:String,
    task_name:String,
    constraints:String,
    time_estimation:String,
  },
  issues:[String],
  summery: String,
  scope:{
    start_date:Date,
    end_date:Date,
  },
  estimated_cost: String,
  risk: String,
})


const Project = model('Project', projectSchema);
module.exports = Project;