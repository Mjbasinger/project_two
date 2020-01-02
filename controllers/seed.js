const express = require('express');
const router = express.Router();

const Kaiju = require('../models/kaiju');
// const User = require('../models/user');



router.get('/', (req, res)=>{
    const KaijusSeed = [
        {
            name: 'Godzilla'
        },
        {
            name: 'Mothra'
        },
        {
            name: 'King Kong'
        },
        {
            name: 'Clover'
        }
    ]
})

modules.exports = router;