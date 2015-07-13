// returns an array of all elements with the class name 'done_link'
var finishLinks = document.getElementsByClassName("done_link");
// finishLinks[i] represents each of the items in `finishLinks`.
var link = finishLinks[i];

for (var i=0; i < finishLinks.length; i++) {
  var handleDoneClick = function() {
    var href = link.getAttribute("href");
    // new XHR object
    var req = new XMLHttpRequest();
    req.open("get", href);
    req.send();
  }
  link.addEventListener("click", handleDoneClick);
}
