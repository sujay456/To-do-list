//Requiring the express js
const express=require('express');
const app=express();


//server will run on port:8000
const port=8000;


const path=require('path');


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



//Home page
app.get('/',function(req,res)
{
    
    // Here all the to dos will be searched and will be passed
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
});




//This is will take the input from the user 
app.post('/form',function(req,res){
    

    //printing the information coming from the user
    console.log(req.body);

    //creating the list through the schema
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



//This is for the deletin of a particuar to do  
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



// this is for deleting/refreshing all the todos

app.get('/delete',function(req,res)
{
    Todolist.deleteMany({},function(err,list)
    {
        if(err)
        {
            return;
        }
        console.log(list);
    });
    res.redirect('back');

});



//Listening 
app.listen(port,function(err)
{
    if(err)
    {
        console.log("Server is not Running ! Error");
        return;
    }
    console.log(`Server is up and running on port:${port}`);
})