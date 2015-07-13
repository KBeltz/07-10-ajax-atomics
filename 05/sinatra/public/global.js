var finishLinks = document.getElementsByClassName("done_link");
var link = finishLinks.getAttribute("href");
var req = new XMLHttpRequest();
req.open("get", link);

for (var i=0; i < finishLinks.length; i++) {
  // finishLinks[i] represents each of the items in `finishLinks`.
}
