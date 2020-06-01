const express=require('express');
const port=9000;
const path=require('path');

const app=express();
//connected db

const db=require('./config/mongoos');

//defining the schema

const Todolist=require('./models/todo');
//for setting up the template/views folder  for ejs file
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'template'));

//using midleware to use the static files
app.use(express.static('asset'));

//using middleware to get  the encoded information
app.use(express.urlencoded());
app.get('/',function(req,res)
{
    // console.log(req.url);

    Todolist.find({},function(err,list)
    {
        if(err)
        {
            console.log('Error');
            return;
        }

        res.render('home',{
            list:list
        });

    });
    //res.render('home',);   
    // res.send('yes server is doing something');

});

app.get('/profile',function(req,res)
{
    
    res.render('profile');
})



app.post('/form',function(req,res){
    
    console.log(req.body);

    Todolist.create(req.body,function(err,newList)
    {
        if(err)
        {
            console.log("ERROR!!!!!");
            return;
        }
        console.log(newList);
    });
   
    res.redirect('back');

});

//for the check 
app.get('/check',function(req,res)
{
    console.log(req.query);

    Todolist.findByIdAndDelete(req.query.id,function(err)
    {
        if(err)
        {
            console.log("Error deleting");
        }
    });

    res.redirect('back');
})

//Listening 

app.listen(port,function(err)
{
    if(err)
    {
        console.log("Server is not Running ! Error");
        return;
    }
    console.log("Server is up and running");
})