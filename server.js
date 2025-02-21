const http = require('http')
const server =  http.createServer((req,res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'}) //200 is the http status code -- makes request successful.
    res.end('Hello World\n')
    res.end() //most important line of the code
});
 server.listen(3000, ()=>{                 //3000 is a port, => makes 2nd anonymous call back function
    console.log('Server running on port 3000') // makes display at console inside terminal, terminal is using node.js.
 });
