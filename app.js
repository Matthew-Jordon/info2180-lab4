window.onload = function () {
    var search = document.getElementById("search");
    var xhttp = new XMLHttpRequest();
    search.addEventListener("click", function (event) {
        xhttp.open("GET", "http://localhost:8080/superheroes.php", true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
            }
        };
    });
}