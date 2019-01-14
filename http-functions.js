var https = require('https');

function getHTML (options, callback) {
    var arr = "";

    https.get(options, function (response){
      response.setEncoding('utf8');

      response.on('data', function (data) {
        arr += data;
        callback(arr)
      })
    })
  }


module.exports = {
  getHTML: getHTML
}

