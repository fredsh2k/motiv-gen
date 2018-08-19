function refreshPage() {
    location.reload();
}

setInterval(function () {
    refreshPage()
}, 60 * 1000 * 10); // 60 * 1000 milsec



var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}

var client = new HttpClient();
client.get('https://talaikis.com/api/quotes/random/', function (response) {
    var jsonResponse = JSON.parse(response);
    var cat = jsonResponse['cat'];

    quoteText = document.getElementById("quoteText");
    quoteAuthor = document.getElementById("quoteAuthor");

    quoteText.innerHTML = jsonResponse['quote'];
    quoteAuthor.innerHTML = " - " + jsonResponse['author'];
});