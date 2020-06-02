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
