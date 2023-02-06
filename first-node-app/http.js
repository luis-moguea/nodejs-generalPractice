const http = require("http")
const path = require("path")
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Hello World")
        res.end()
    }
    if(req.url === "/api/test"){
        res.write(JSON.stringify(["Test succeeded",1,2,3]))
        res.end()
    }
})

server.listen(2000)

console.log("Listening to port 2000...")