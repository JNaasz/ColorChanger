$('document').ready(function(){


//Commands for mouse over  and On Red
$('#red').mouseenter(function() {
  $( this ).fadeTo( 300 , .25 );
});

$('#red').mouseleave(function(){
  $( this ).fadeTo( 300 , 1 );
});

$( '#red' ).click(function() {
  $('#red').css( 'background-color' , 'red' )
  .text('Red was Clicked!');
  $('.color').attr('src', 'images/red.jpg');
  $('#purple').css('background-color', 'black').text("Violet");
  $('#blue').css('background-color', 'black').text("Blue");
  $('#green').css('background-color', 'black').text("Green");
  $('#yellow').css('background-color', 'black').text("Yellow");
});

//Commands for mouse over and on Yellow
$('#yellow').mouseenter(function() {
  $( this ).fadeTo( 300 , .25 );
});

  $('#yellow').mouseleave(function(){
    $( this ).fadeTo( 300 , 1 );
});

$( '#yellow' ).click(function() {
  $('#yellow').css( 'background-color' , 'yellow' )
  .text('Yellow was Clicked!');
  $('.color').attr('src', 'images/yellow.jpg');
  $('#red').css('background-color', 'black').text("Red");
  $('#blue').css('background-color', 'black').text("Blue");
  $('#green').css('background-color', 'black').text("Green");
  $('#purple').css('background-color', 'black').text("Violet");
});

//Commands for mouse over Green
$('#green').mouseenter(function() {
  $( this ).fadeTo( 300 , .25 );
});

  $('#green').mouseleave(function(){
    $( this ).fadeTo( 300 , 1 );
});

$( '#green' ).click(function() {
  $('#green').css( 'background-color' , 'green' )
  .text('Green was Clicked!');
  $('.color').attr('src', 'images/green.jpg');
  $('#red').css('background-color', 'black').text("Red");
  $('#blue').css('background-color', 'black').text("Blue");
  $('#purple').css('background-color', 'black').text("Violet");
  $('#yellow').css('background-color', 'black').text("Yellow");
});

//Commands for mouse over blue
$('#blue').mouseenter(function() {
  $( this ).fadeTo( 300 , .25 );
});

  $('#blue').mouseleave(function(){
    $( this ).fadeTo( 300 , 1 );
});

$( '#blue' ).click(function() {
  $('#blue').css( 'background-color' , 'blue' )
  .text('Blue was Clicked!');
  $('.color').attr('src', 'images/blue.jpg');
  $('#red').css('background-color', 'black').text("Red");
  $('#purple').css('background-color', 'black').text("Violet");
  $('#green').css('background-color', 'black').text("Green");
  $('#yellow').css('background-color', 'black').text("Yellow");
});

//Commands for mouse over Purple
$('#purple').mouseenter(function() {
  $( this ).fadeTo( 300 , .25 );
});

  $('#purple').mouseleave(function(){
    $( this ).fadeTo( 300 , 1 );
});

$( '#purple' ).click(function() {
  $('#purple').css( 'background-color' , 'purple' )
  .text('Violet was Clicked!');
  $('.color').attr('src', 'images/purple.jpg');
  $('#red').css('background-color', 'black').text("Red");
  $('#blue').css('background-color', 'black').text("Blue");
  $('#green').css('background-color', 'black').text("Green");
  $('#yellow').css('background-color', 'black').text("Yellow");

});

})
