var button = $('.button');

button.click(getInfo);

function getInfo() {
  debugger
  event.preventDefault();
  var siteTitle = $('#site-title').val();
  var siteUrl = $('#website-url').val();
  var newCard = document.createElement('article');
  var string = document.createTextNode(siteTitle);
  newCard.appendChild(string);
  console.log(newCard);
  $('section').append(newCard);
}
