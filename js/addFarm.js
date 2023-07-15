import {htmlIncluder} from "./includeHTML.js";
$(document).ready(()=>{
    htmlIncluder.includeHTML();
})

$('.uploadImage').click(()=>{
    $('.upload').click();
})