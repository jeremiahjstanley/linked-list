var button = $('.button');
var total = 0;
var read = 0;
var unread = total - read;

button.click(getInfo);

function getInfo() {
  var siteTitle = $('#site-title').val();
  var siteUrl = $('#website-url').val();

  errorMessage(siteTitle, siteUrl);
  enableButton(siteTitle, siteUrl);

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

  event.preventDefault();

  $('section').prepend(newCard);
  $('section :nth-child(1)').on('click','.read-button', markRead);
  $('section :nth-child(1)').on('click','.delete', deleteCard);

  total +=1
  console.log(total)
};


function errorMessage(siteTitle, siteUrl) {
  if(siteTitle === "" || siteUrl === "") {
    displayError();
    return;
  };
};

function enableButton(siteTitle, siteUrl) {
  if (siteTitle === "" || siteUrl === "") {
    button.removeAttribute('disabled', true);
  };
};

function markRead() {
  $(this).parent().toggleClass("read");
  read +=1
};

function deleteCard() {
  $(this).parent().remove();
  total -=1
};

function displayError() {
  $('.error').toggle('hidden');
};