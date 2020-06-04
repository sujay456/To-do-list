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
var count=[];
for(let c =0;c<o.length;c++)
{
    count[c]=0;
}
function print(con)
{
    console.log(con);
    let o=$('.style');

    for(let c =0;c<o.length;++c)
    {
        if(o[c].innerText==con)
        {
            count[c]++;
            if(count[c]%2!=0){
            console.log('uff');
            o[c].style.textDecoration="line-through";
            }
            else
            {
                o[c].style.textDecoration='none';
            }

        }
    }
    // console.log("Hi i am sujay");
    // console.log($('.style'));
}
