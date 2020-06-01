
const mongoose=require('mongoose');

const TodoSchema= new mongoose.Schema({
   
    content:
    {
        type:String,
        required:true
    }
});

const Todo=mongoose.model('TODO',TodoSchema);

module.exports=Todo;
