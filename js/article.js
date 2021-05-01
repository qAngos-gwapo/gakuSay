var home, article, about;
home = document.getElementById("homelink");
article = document.getElementById("articlelink");
about = document.getElementById("aboutlink");

home.onclick = function() {localStorage.setItem("identifier", 1)};
article.onclick = function() {localStorage.setItem("identifier", 2)};
about.onclick = function() {localStorage.setItem("identifier", 3)};