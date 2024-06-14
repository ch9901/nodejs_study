var http = require("http");
var fs = require("fs");
const url = require("url");
var app = http.createServer(function (request, response) {
  var _url = request.url;
  const queryData = url.parse(_url, true).query;
  let title = queryData.id;
  console.log(queryData);
  if (_url == "/") {
    title = "Welcome";
  }
  if (_url == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  fs.readFile(
    `./0614-2-data/${queryData.id}`,
    "utf8",
    function (err, description) {
      console.log(description, err);
      const template = `
  <!doctype html>
<html>
<head>
  <title>${title}</title>
  <meta charset="utf-8">
</head>
<body>
   <h1><a href="/">WEB</a></h1>
  <ol>
    <li><a href="/?id=html">HTML</a></li>
    <li><a href="/?id=css">CSS</a></li>
    <li><a href="/?id=javascript">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p>${description}
  </p>
</body>
</html>

  `;
      // response.end(fs.readFileSync(__dirname + url));
      response.end(template);
    }
  );
});
app.listen(3000);
