const h1 = document.querySelector("h1");
h1.style.background = "purple";

h1.onmouseover = function(){
   h1.style.background = "red";
}
h1.onmouseout = function(){
    h1.style.background = "purple";
}
