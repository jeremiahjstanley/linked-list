var button = $('.button');

button.click(getInfo);

function getInfo() {
  event.preventDefault();
  // var siteTitle = $('#site-title').val();
 
  var siteTitle = $('#site-title').val();
  var siteUrl = $('#website-url').val();
  
  var newCard = 
  "<article class='card'>"+
  "<h2 class='card-title'>"
  +siteTitle+
  "</h2> <hr> <a href='" + siteUrl + "'class='card-url'>"
  +siteUrl+
  "</a> <hr>"+
  " <button class='read-button'>read</button>"+
  " <button class='delete'>delete</button>"+
  "</article";

  $('section').prepend(newCard);
  console.log(newCard);

  $('.read-button').on('click',function markRead(){
    $(this).parent().toggleClass("read");
  })

}
