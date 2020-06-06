
const mongoose=require('mongoose');


// Creating the scehma for the list
const TodoSchema= new mongoose.Schema({
   
    content:
    {
        type:String,
        required:true
    },
    category:
    {
        type:String,

    },
    date:
    {
        type:String
    }
});


//making the model
const Todo=mongoose.model('TODO',TodoSchema);

module.exports=Todo;
