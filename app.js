window.onload = function () {
    var btn = document.getElementById("btn");
    var xhttp = new XMLHttpRequest();
    btn.addEventListener("click", function () {
        var text = document.getElementById("search").value;
        xhttp.open("GET", "http://localhost:8080/superheroes.php?q=" + text, true);
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                document.getElementById("result").innerHTML = "<h1>Results</h1><hr>" + xhttp.responseText;
            }
        };
        xhttp.send();
    });
}