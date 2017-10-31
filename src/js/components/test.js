// require('./test.less');
var $ = require('jquery');
var htmlTem=require("html-loader!./_test.tem");
$('#testwrapper').append(htmlTem);
console.log(htmlTem);
module.exports.a={
    x:1
}