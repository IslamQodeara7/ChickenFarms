import {htmlIncluder} from "./includeHTML.js";
$(document).ready(()=>{
    htmlIncluder.includeHTML();
})

let count = 60;
let date = setInterval(()=>{
let fullDate = new Date();
let day = Number(fullDate.getDate());
let month = Number(fullDate.getMonth())+1;
let year = Number(fullDate.getFullYear());
$('.counter .numbers.one').html(day%10);
$('.counter .numbers.two').html(parseInt(day/10));
$('.counter .numbers.three').html(month%10);
$('.counter .numbers.four').html(parseInt(month/10));
$('.counter .numbers.five').html(year%10);
$('.counter .numbers.six').html(parseInt(year%100/10));
$('.counter .numbers.seven').html(parseInt(year%1000/100));
$('.counter .numbers.eight').html(parseInt(year/1000));
},1000);

$('.stockMarket .dayDate').html(count);
let remainingTime = setInterval(()=>{
    count--;
    $('.stockMarket .dayDate').html(count);
    if(count==0){
        stopInterval(remainingTime);
    }

},60000)