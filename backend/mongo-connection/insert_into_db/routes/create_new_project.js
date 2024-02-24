const express = require('express')
const mongoose = require('mongoose')
const Project = require('../../../models/Project')
// const mongoose = require('mongoose')





const app = express();
const router = express.Router()

router.post('/create-new-project',async(req,res)=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/metdoc');
        const bo = req.body
        const article = new Project({
            project_name: bo.project_name,
            project_description: bo.project_description,
            team_leader: bo.team_leader,
          });
          const art = await article.save();
          console.log(typeof art)
          res.send(art)
    }catch(err){
        console.error(err)
    }
    
    

})


router.get('/get-project/:id', async (req, res) => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/metdoc');
      const id = req.params.id; // Convert age parameter to a number
      console.log(id)
      // Query MongoDB to fetch data based on age
      const data = await Project.findById(id);
      res.send(data); // Send data as JSON response
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router