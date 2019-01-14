var getFunction = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function reverse(html) {
  var result = ''
  var splitString = html.split('')
  for (var i = splitString.length - 1; i >= 0; i--) {
    result += splitString[i]
  }
  console.log(result)
}


getFunction.getHTML(requestOptions, reverse);