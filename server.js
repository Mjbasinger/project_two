const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const port = 3000;

require('./db/db.js');

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));




app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})