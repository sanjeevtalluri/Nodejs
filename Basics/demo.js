const http = require('http');
const server = http.createServer((req,res)=>{
    let body = '<body><h1>Welcome to Default</h1></body>';
    
    if(req.url === '/home'){
        body = '<body><h1>Welcome to Home</h1></body>'
    }
    else if(req.url === '/about'){
        body = '<body><h1>Welcome to About Us page</h1></body>'
    }
    else if(req.url === '/node'){
        body = '<body><h1>Welcome to my Node Js project</h1></body>';
    }
    res.write('<html>');
    res.write('<head><title>Demo</title></head>');
    res.write(body);
    res.write('</html>');
    res.end();
})
server.listen(4000);