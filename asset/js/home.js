var d=new Date();

var day_arr=['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
var month_arr=['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];

var date=d.getDate();
var day=d.getDay();
var month=d.getMonth();

console.log("date:",date);
console.log("day:",day_arr[day]);
console.log("Month:",month_arr[month]);

// for  date and day in the header
var x='<h1 id="header">'+day_arr[day]+', '+month_arr[month]+'  '+date+'</h1>';

$('#todo-container').append(x);

//trying to submit through enter

// window.addEventListener('keypress',function(event)
// {
//     console.log(event.key);
// })

var list=[];

var o=$('.style');

for(let c=0;c<o.length;++c)
{
    list.push(o[c].innerText);
}

// for(let c =0;c<o.length;c++)
// {
//     localStorage.setItem(o[c].innerText,"false");
// }

//this is mandatory for line-through


for(let c =0;c<o.length;c++)
{
    console.log("hi every time added");
    if(localStorage.getItem(o[c].innerText)=="true")
    {

        o[c].style.textDecoration="line-through";

    }
}
function change(list)
{
    console.log("hello");
}
function print(con,whole)
{
    console.log(whole);
    
    for(let c =0;c<o.length;++c)
    {
        if(o[c].innerText==con)
        {

            if(localStorage.getItem(con)=='false')
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
            // count[c]++;
            // if(count[c]%2!=0){
            // console.log('uff');
            // o[c].style.textDecoration="line-through";
            // }
            // else
            // {
            //     o[c].style.textDecoration='none';
            // }

        }
    }
    // console.log("Hi i am sujay");
    // console.log($('.style'));
}

function False()
{
    return false;
}
