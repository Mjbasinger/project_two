const express = require('express');
const router = express.Router();
const Kaiju = require('../models/kaiju.js');
const User = require('../models/user.js');

//new route for kaiju page
router.get('/new', async (req, res)=> {
   try {
    const allUsers = await User.find();
    res.render('kaijus/new.ejs', {
    users: allUsers
   });
} catch (err) {
    res.send(err);
} 
})
//create route
router.post('/', async (req, res)=>{
    try {
    const foundUser = await User.findOne({username: req.session.username})
    req.body.user = foundUser._id;
    await Kaiju.create(req.body);
    res.redirect('/kaijus');
    } catch (err) {
        res.send(err);
    }
})

//index route
router.get('/', async (req, res)=>{
    try{
        const foundKaijus = await Kaiju.find();
        console.log(foundKaijus);
        res.render('kaijus/index.ejs',{
        kaijus: foundKaijus
       
        
        })
    } catch (err){
        res.send(err);
    }
})
//show
router.get('/:id', async (req, res)=> {
    try{
        const foundKaiju = await Kaiju.findById(req.params.id).populate('user');
        res.render('kaijus/show.ejs', {
            kaiju: foundKaiju,
        });
    } catch (err)  {
    res.send(err);
    } 
    
});

//edit route
router.get('/:id/edit', async (req, res) => {
    try {
    const foundKaiju = await Kaiju.findById(req.params.id);
    const allUsers = await User.find();
        res.render('kaijus/edit.ejs', {
            kaijus: foundKaiju,
            users: allUsers
        })
    }catch (err) {
        res.send(err);
    }
});

//update
router.put('/:id', async (req, res)=>{
    try {
        await Kaiju.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/kaijus/${req.params.id}`);
    }catch (err){
        res.send(err);
    }   
})

//delete
router.delete('/:id', async (req, res)=>{
    try {
   await Kaiju.findByIdAndRemove(req.params.id);
    
   res.redirect('/kaijus');

    }catch (err){
        res.send(err);
    }
})



module.exports = router;