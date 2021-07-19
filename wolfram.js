var cors_api_url = 'https://cors-anywhere.herokuapp.com/';

function doCORSRequest(options, printResult) {
  var x = new XMLHttpRequest();
  x.open(options.method, cors_api_url + options.url);

  x.onload = x.onerror = function() {
    responseObject = String(x.responseText)
    first = responseObject.indexOf("img") + 1
    firstSub = responseObject.substring(first)
    second = firstSub.indexOf("img") + 9
    secondSub = firstSub.substring(second)
    last = secondSub.indexOf("'")
    final = secondSub.substring(0,last).replace("&amp;","&")
    printResult(final  || '');
  };

  x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  x.send(options.data);
};

function getNutritionalInfo(url, cb) {
  doCORSRequest({ method: 'POST', url: url, data: url }, cb);
}