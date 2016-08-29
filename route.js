
function route(handle,pathname,response,postData){
	console.log("路由为: "+ pathname);
	if(typeof handle[pathname] == 'function'){
		return handle[pathname](response,postData);
	}else{
		console.log(pathname+" 没有注册路由");
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("404 NOT FOUND");
		response.end();
	}		
}
exports.route = route;