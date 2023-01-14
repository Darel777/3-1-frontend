const {User} = require('./models')
const express = require('express')
var body = require("body-parser")
const app = express()
const SECRET = 'randomaccess'
app.use(express.json())
app.use(body.urlencoded({extended:true}))

app.get('/api/users',async(req,res)=>{
    const users = await User.find()
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send(users)
})

app.post('/api/register',async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    console.log(req)
    const user = await User.create({
        username: req.body.username,
        account: req.body.account,
        password: req.body.password,
    })
    res.send(user)
})
app.post('/api/login',async(req,res)=>{
    const user = await User.findOne({
        username:req.body.username,
        account:req.body.account
    })
    if(!user){
        return res.status(422).send({
            message:'user not found'
        })
    }
    const isPasswordValid = require('bcryptjs').compareSync(
        req.body.password,
        user.password
    )
    if(!isPasswordValid){
        return res.status(422).send({
            message:'password incorrect'
        })
    }
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({
        id:String(user._id)
    },SECRET)
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send({
        user,
        token:token
    })
})

app.listen(3001, () => {
    console.log('http://localhost:3001')
})

