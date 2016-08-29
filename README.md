# try to create route

#启动文件
```bash
   git clone https://github.com/superNever/createRoute.git
   cd createRoute&&npm install
   npm run start
```


#文件结构

- index.js 入口文件
- server.js 服务文件
- route.js 路由文件
- requestHandlers.js 路由处理文件呢


# 简单阐述一下url 和 querystring模块
```bash
                                url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]
```
