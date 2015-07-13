var req = new XMLHttpRequest();



//  ---------------------------------------------------------------------------

var myLink = document.getElementById("clicker");

var handleTheClick = function(event){
  // ?????????
  req.open("get", this.getAttribute("href"));

  req.addEventListener("load", function(){
    document.getElementById("clicker").innerHTML = "Response received!"
  });

  req.send();
  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

// When the link is clicked, run the above code.
myLink.addEventListener("click", handleTheClick);
