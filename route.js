var fs = require('fs');
function route(handle,pathname,response,postData){
	console.log("路由为: "+ pathname);
	if(typeof handle[pathname] == 'function'){
		return handle[pathname](response,postData);
	}else if(pathname.substring(pathname.lastIndexOf('.') + 1)){
		var type,
		filename = pathname.substring(1);
		var str = filename.substring(filename.lastIndexOf('.') + 1);
		switch(str){
			case 'html':
			case 'htm':      type = 'text/html; charset=UTF-8'; break;
			case 'js':       type = 'application/javascript; charset=UTF-8'; break;
			case 'css':      type = 'text/css; charset=UTF-8'; break;
			case 'txt' :     type = 'text/plain; charset=UTF-8'; break;
			case 'manifest': type = 'text/cache-manifest; charset=UTF-8'; break;
			default:         type = 'application/octet-stream'; break;
		}
		fs.readFile(filename,function(err, content){
			if (err) {
			  response.writeHead(404, {
			    'Content-Type': 'text/plain; charset=UTF-8'});
			  response.write(err.message);
			  response.end();
			} else {
			  response.writeHead(200, {'Content-Type': type});
			  response.write(content);
			  response.end();
			}
		});
	}else{
		console.log(pathname+" 没有注册路由");
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("404 NOT FOUND");
		response.end();
	}		
}
exports.route = route;