require("http").createServer((req, res) => {
  res.write("abc")
  res.end()
}).listen(8080)
