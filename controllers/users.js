const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Kaiju = require('../models/kaiju.js');
const User = require('../models/user.js');

//new user
router.get('/new', (req, res)=>{
    res.render('users/new.ejs');
})

//index
router.get('/', async (req, res)=>{
    try {
        const foundUsers = await User.find();
        
        res.render('users/index.ejs', {
            users: foundUsers
        })
    } catch (err) {
        res.send(err);
    }
})

// Logout route
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            res.send(err);
        } else {
            res.redirect('/');
        }
    })
})

//login create route
router.post('/login', async (req, res)=> {
    try {
        const foundUser = await User.findOne({
            username: req.body.username
        });
        if(foundUser){
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.message = '';
                req.session.username = foundUser.session.username;
                req.session.logged = true;

                res.redirect('/users/show>');
            } else {
                req.session.message = 'Username or password is incorrect';
                res.redirect('/');
            }
        } else {
            req.session.message = 'Username or password is incorrect';
            res.redirect('/');
        }
    } catch(err) {
        res.send(err);
    }

    })

    router.post('/registration', async (req, res)=>{
        
        const passwordHash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        
        const userDBEntry = {
            username: req.body.username,
            password: passwordHash,
            email: req.body.email
        }
        try {
            const createdUser = await User.create(userDBEntry);
            req.session.username = foundUser.username;
            req.session.logged = true;
            res.redirect('/');
        } catch(err) {
            res.send(err);
        }
    })

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            res.send(err);
        } else {
            res.redirect('/');
        }
    })
})

//create route
router.post('/', async (req, res)=>{
    try{
        await User.create(req.body);

        res.redirect('/users');
    } catch (err){
        res.send(err)
    }
});


//show
router.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
    
        res.render('users/show.ejs', {
        user: foundUser
        })
    } catch (err) {
        res.send(err);
    }
});


//edit route
router.get('/:id/edit', async (req, res)=> {
    try {
        const foundUser = await User.findById(req.params.id);

        res.render('users/edit.ejs', {
            user: foundUser,
            
        });
    } catch (err) {
        res.send(err)
    }
})

//update
router.put('/:id', async (req, res)=>{
    try {
        await User.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/users/${req.params.id}`);
    } catch (err) {
        res.send(err);
    }
})




module.exports = router;