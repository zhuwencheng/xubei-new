// require('./test.less');
var $ = require('jquery');
var htmlTem=require("html-loader!./test.html");
$('body').append(htmlTem);
console.log(htmlTem);
module.exports.a={
    x:1
}