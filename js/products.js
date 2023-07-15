import {htmlIncluder} from "./includeHTML.js";
$(document).ready(()=>{
    htmlIncluder.includeHTML();
});


$('.addProductShower').click(()=>{
    $('.addProductPart').css({"left":'0%'});
})

$('.addProductCancellation').click(()=>{
    
    $('.addProductPart').css({"left":'-105%'});
})