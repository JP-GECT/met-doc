const express = require('express')
const mongoose = require('mongoose')
const Project = require('../../../models/Project')


const app = express();
const router = express.Router()

router.post('/',(req,res)=>{
    console.log(req)
    try{
        const body = req.data;
    console.log(body)
    }catch(err){
        console.error(err)
    }
    
    

})

module.exports = router