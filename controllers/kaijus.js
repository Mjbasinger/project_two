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
router.post('/', (req, res)=>{
    Kaiju.create(req.body, (error, createdKaiju)=>{
    res.redirect('/kaijus')
})
})

//show route
router.get('/:id', async (req, res)=> {
    try{
        const foundKaiju = await Kaiju.findById(req.params.id).populate('User');
        res.render('kaijus/show.ejs', {
            kaiju: foundKaiju
        });
    } catch (err)  {
        res.send(err);
    }
    
    });

//edit route
router.get('/:id/edit', (req, res) => {
    Kaiju.findById(req.params.id, (err, kaijuToEdit) => {
        res.render('kaijus/edit.ejs', {
            foundKaiju: kaijuToEdit,
            foundKaijuId: kaijuToEdit._id
        })
    })
})

//put
router.put('/:id', (req, res)=>{
    Kaiju.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedKaiju)=>{
        res.redirect(`/kaijus/${updatedKaiju._id}`);
    })
})

//delete
router.delete('/:id', (req, res)=>{
    Kaiju.findByIdAndRemove(req.params.id, (err, deletedKaiju)=>{
        res.redirect('/kaijus');
    })
})

//index route
router.get('/', (req, res)=>{
    Kaiju.find({}, (err, allKaijus)=>{
    res.render('kaijus/index.ejs',{
        kaijus: allKaijus
        })
    })
})


module.exports = router;