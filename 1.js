var dictionary_url = window.location.href.slice(0, -6).concat(document.querySelector('link[rel="canonical"]').href);
var x = 1;
var button_values = [];
var buttons = [];
var unclicked_buttons = [];
while (x <= 12) {
  var y = document.evaluate("/html/body/div[2]/main/div[3]/div/div/div/div[2]/div/div/div[" + x + "]/div/div/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML; 
  var z = document.evaluate("/html/body/div[2]/main/div[3]/div/div/div/div[2]/div/div/div[" + x + "]/div/div/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; 
  button_values.push(y); 
  buttons.push(z); 
  unclicked_buttons.push(z); 
  x += 1;
}
