var button = $('.button');
var total = 0;
var read = 0;
var unread = total - read;

button.click(getInfo);


function getInfo() {
  event.preventDefault();
 
var siteTitle = $('#site-title').val();
var siteUrl = $('#website-url').val();

  if(siteTitle === "" || siteUrl === "") {
    displayError();
    return;
  }
  $(".error").attr('hidden','true');

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

  total +=1
  console.log(total)
  
  
  
  document.querySelector("form").reset();

  $('section').prepend(newCard);

  $('section :nth-child(1)').on('click','.read-button', markRead)
  $('section :nth-child(1)').on('click','.delete', deleteCard)

  button.attr('disabled','true');

}

 $('form').on('input', function() {
    if($('#site-title').val() && $('#website-url').val()) {
      button.removeAttr('disabled');
    }else button.attr('disabled','true');
  })

function markRead() {
     $(this).parent().toggleClass("read");
     read ++;
}

function deleteCard() {
  $(this).parent().remove();
  total --;
}

function displayError() {
  $('.error').removeAttr('hidden');
}

