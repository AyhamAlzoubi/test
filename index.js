require("http").createServer((req, res) => {
  console.log('aaaaaaa')
  res.write("abc")
  res.end()
}).listen(8080)
