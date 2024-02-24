const express = require('express')
const mongoose = require('mongoose')
const Project = require('../../../models/Project')


const app = express();
const router = express.Router()

router.post('/',(req,res)=>{
    const body = req.body;
    console.log(body)
    

})

module.exports = router