function SayHello() {
  var name = document.getElementById("name").value;
  var message = "<h2>Hello " + name + '!</h2>';
  if (name === "") {
    message = "<h2>You'd better input the name, Pal!)</h2>"
  }
  if (name === "Savva") {
    message = "<h2>Hello Broooooooooo)</h2>"
  }
  document.getElementById("content").innerHTML = message;

};