var https = require('https');

function getAndPrintHTML (options) {
  var arr = "";


  https.get(options, function (response){
    response.setEncoding('utf8');

    response.on('data', function (data) {
      arr += data;
      console.log("data chunk", arr);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);