var button = $('.button');
var total = 0;
var read = 0;

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
  "</h2> <hr> <a href='" + siteUrl + "'class='card-url' target='_blank'>"
  +siteUrl+
  "</a> <hr>"+
  " <button class='read-button'>read</button>"+
  " <button class='delete'>delete</button>"+
  "</article";

  total +=1
  tallyRead();
  
  
  
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
     if ($(this).parent().hasClass('read')) {
      read--;
     } else read ++;
     $(this).parent().toggleClass("read");
     tallyRead();
}

function deleteCard() {
  if ($(this).parent().hasClass('read')) {
    read--;
  }
  $(this).parent().remove();
  total--;
  tallyRead();
}

function displayError() {
  $('.error').removeAttr('hidden');
}

function tallyRead(){
  
  $('.total').text("Total: " + total);
  $('.read-count').text("Read: " + read);
  $('.unread').text("Unread: " + (total - read));
}
