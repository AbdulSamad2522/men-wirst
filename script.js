$(document).ready(function(){

$('.product-btn').on('click', function (){
        window.location.href = "product.html";
})
$("#home").click(function(){
    window.location.href = "index.html";
})
$("#contact").click(function(){
    window.location.href = "contact.html";
})
})
$('.watch').on('click', function (){
    $("#watch-details").removeClass("d-none");
})
$(".watch-close").on('click', function(){
    $("#watch-details").addClass("d-none");
})
$(".sell").on('click', function (){
    $("#upload").removeClass("d-none");
})
$(".upload-cut").on('click', function(){
    $("#upload").addClass("d-none");
})
$(".cart-btn").on('click', function(){
    $("#cart").removeClass("d-none");
})
$(".cart-cut").on('click', function(){
    $("#cart").addClass("d-none");
})
$(".cart-btn-sm").on('click', function(){
    $("#cart-sm").removeClass("d-none");
})
$(".cart-cut-sm").on('click', function(){
    $("#cart-sm").addClass("d-none");
})
$(".buy-now").on('click', function(){
    window.location.href = "peoduct-checkout.html";
})