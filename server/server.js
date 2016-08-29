// server
var http = require('http');
var url = require('url');

function start(route,handle) {
	function onRequest(request,response){
		//获取url相关信息,取消favico.ico请求干扰
		if(request.url!=="/favicon.ico"){
			var pathname = url.parse(request.url).pathname;
			var postData = "";

			request.setEncoding("utf8");

			request.addListener("data",function(postDataChunk){
				postData += postDataChunk;
				console.log("received POST data chunk "+ postDataChunk
					+ "',");
			});
			request.addListener("end",function(){
				route(handle,pathname,response,postData);
			});
		}	
		
	}

	http.createServer(onRequest).listen(8888);

	console.log("server has started,at port 8888");
}
exports.start = start;
