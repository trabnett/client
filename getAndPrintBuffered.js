var https = require('https');

function getAndPrintHTML () {
  var arr = "";
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response){
    response.setEncoding('utf8');

    response.on('data', function (data) {
      arr += data;
      console.log("data chunk", arr);
    });
  });

};
console.log(getAndPrintHTML());
