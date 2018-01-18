var x = 1;
var button_values = [];
var buttons = [];
var unclicked_buttons = [];
var dictionary_url = window.location.href.slice(0, -6).concat(document.querySelector('link[rel="canonical"]').href);

// Found over at https://www.html5rocks.com/en/tutorials/cors/
function createCORSRequest(method, url) { var xhr = new XMLHttpRequest(); if ("withCredentials" in xhr) { xhr.open(method, url, true); } else if (typeof XDomainRequest != "undefined") { xhr = new XDomainRequest(); xhr.open(method, url); } else { xhr = null; } return xhr; }

var dictionary_page = createCORSRequest("GET", dictionary_url);

var text = dictionary_page.responseText;
var title = text.match('<title>(.*)?</title>')[1];

while (x <= 12) {
  var y = document.evaluate("/html/body/div[2]/main/div[3]/div/div/div/div[2]/div/div/div[" + x + "]/div/div/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML; 
  var z = document.evaluate("/html/body/div[2]/main/div[3]/div/div/div/div[2]/div/div/div[" + x + "]/div/div/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; 
  button_values.push(y); 
  buttons.push(z); 
  unclicked_buttons.push(z); 
  x += 1;
}
