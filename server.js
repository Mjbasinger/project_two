const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const port = 3000;

require('./db/db.js');

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//controllers
const kaijusController = require('./controllers/kaijus.js');
app.use('/kaijus', kaijusController);

// const usersController = require('./controllers/users.js');
// app.use('/users', usersController);



app.get('/', (req, res)=> {
    res.render('index.ejs')
})


app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})

