
const mongoose=require('mongoose');

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

const Todo=mongoose.model('TODO',TodoSchema);

module.exports=Todo;
