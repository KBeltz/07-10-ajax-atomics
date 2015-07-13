var finishLinks = document.getElementsByClassName("done_link");



for (var i=0; i < finishLinks.length; i++) {
  // finishLinks[i] represents each of the items in `finishLinks`.
  var link = finishLinks[i].getAttribute("href");
  var req = new XMLHttpRequest();
  req.open("get", link);
}
