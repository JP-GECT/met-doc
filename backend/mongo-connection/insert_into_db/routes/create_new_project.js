const express = require('express')
const mongoose = require('mongoose')
const Project = require('../../../models/Project')


const app = express();
const router = express.Router()

router.post('/',(req,res)=>{
    try{
        const bo = req.body
    console.log(bo)
    }catch(err){
        console.error(err)
    }
    
    

})

module.exports = router