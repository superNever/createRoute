// 路由处理函数
// var exec = require('child_process').exec;
var queryString = require("querystring");
function start(response,postData){
	console.log("start 被调用");
	var body = '<html>'+
	    '<head>'+
	    '<meta http-equiv="Content-Type" content="text/html; '+
	    'charset=UTF-8" />'+
	    '</head>'+
	    '<body>'+
	    '<form action="/upload" method="post">'+
	    '<textarea name="text" rows="20" cols="40"></textarea>'+
	    '<input type="submit" value="Submit text" />'+
	    '</form>'+
	    '</body>'+
	    '</html>';
	    response.writeHead(200, {"Content-Type": "text/html"});
	    response.write(body);
	    response.end();
}
function upload(response,postData){
	console.log("upload 被调用");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("发送的信息为："+queryString.parse(postData).text);
	response.end();
}
exports.start = start;
exports.upload = upload;