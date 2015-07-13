function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// returns an array of all elements with the class name 'done_link'
var finishLinks = document.getElementsByClassName("done_link");
// finishLinks[i] represents each of the items in `finishLinks`.
var link = finishLinks[i];

for (var i=0; i < finishLinks.length; i++) {
  var handleDoneClick = function() {
    // link.getAttribute("href") => gets the href value for each link
    var href = this.getAttribute("href");
    // new XHR object
    var req = new XMLHttpRequest();
    req.open("get", href);

    // load bar
    req.addEventListener("loadstart", function() {
      loadingGif = document.createElement("img");
      loadingGif.setAttribute("src", "/ajax-loader.gif");
      loadingGif.setAttribute("id", "loader");

      insertAfter(loadingGif, event.target);
    });

    request.addEventListener("load", function() {
      document.getElementById("loader").remove();
      // removes the 'mark done' link
      event.target.remove();

      var task_id = event.target.getAttribute("data-task-id");
      var dom_task_id = "task" + task_id;
      document.getElementById(dom_task_id).classList.add("finished");
    });

    req.send();

    // prevents page from reloading when the link is clicked
    event.preventDefault();
  }
  link.addEventListener("click", handleDoneClick);
}
