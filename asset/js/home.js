
// for  date and day in the header


var d=new Date();

var day_arr=['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
var month_arr=['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];

var date=d.getDate();
var day=d.getDay();
var month=d.getMonth();

console.log("date:",date);
console.log("day:",day_arr[day]);
console.log("Month:",month_arr[month]);


var x='<h1 id="header">'+day_arr[day]+', '+month_arr[month]+'  '+date+'</h1>';

$('#todo-container').append(x);



// /-------------------------------------------------------------------------------------------------------------/ 

//variables 
// 1.list- This is an array for storing all the to do which is given by the user
// 2.o   - This is DOM for the class style which is showing the content/desciption of to do



var list=[];

var o=$('.style');


//pushing all the to dos in the array "list"
for(let c=0;c<o.length;++c)
{
    list.push(o[c].innerText);
}


//For checking those checkbox which are checked before ,so that even after refreshing it is checked
for(let c=0;c<list.length;++c)
{
    if(localStorage.getItem(o[c].innerText)=="true")
    {
        $('.complete')[c].checked=true;
    }

}



//This loop is deleting all those keys from the local storage which were present in the variable list ,but now are deleted 
for(let c=0;c<localStorage.length;++c)
{
    let flag=false;
    for(let d=0;d<list.length;++d)
    {
        if(localStorage.key(c)==list[d])
        {
            flag=true;
            break;
        }
        
    }
    if(flag==false)
    {
        localStorage.removeItem(localStorage.key(c));
    }
}




//This for loop is for even after killing the server when you again start the server ,the lists you cleared will remain cleared 
for(let c=0;c<o.length;c++)
{
    console.log("hi every time added");
    if(localStorage.getItem(o[c].innerText)=="true")
    {
        
        o[c].style.textDecoration="line-through";

    }
}






//This function will run every time the checkbox  is checked 
function print(con)
{
   
    
    for(let c =0;c<o.length;++c)
    {
        if(o[c].innerText==con)
        {

            console.log(localStorage.getItem(con));
            if(localStorage.getItem(con)=='false' || localStorage.getItem(con)==null)
            {
                
                localStorage.setItem(con,"true");
                console.log(localStorage.getItem(con));
                o[c].style.textDecoration="line-through";
            }
            else
            {
                localStorage.setItem(con,"false");

                o[c].style.textDecoration='none';

            }

        }
    }
}



function False()
{
    return false;
}
