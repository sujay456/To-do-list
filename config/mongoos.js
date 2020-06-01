const mongoose=require('mongoose');

//making the connection between mongoose and mongodb
mongoose.connect('mongodb://localhost/to-do-list-database');

//aquiring connection

const connection=mongoose.connection;

connection.on('error',console.error.bind(console,'error'));

connection.once('open',function()
{
    console.log('succesfully connected to mongodb');
})
