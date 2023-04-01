const fs = require('fs');

const requestHandler = (req,res)=>{
    const method = req.method;
    const url = req.url;
    if (url === '/') {
        if (fs.existsSync('sample.txt')) {
            fs.readFile('sample.txt', 'utf8', (err, data) => {
                res.write('<html>');
                res.write('<head><title>Demo</title></head>');
                res.write('<body><h1>' + data + '</h1><form action = "/message" method = "post"><input type= "text" name = "message"><button type="submit">submit</button></form></body>');
                res.write('</html>');
                return res.end();
            })
        }
        else {
            res.write('<html>');
            res.write('<head><title>Demo</title></head>');
            res.write('<body><form action = "/message" method = "post"><input type= "text" name = "message"><button type="submit">submit</button></form></body>');
            res.write('</html>');
            return res.end();
        }


    }
    else if (method === 'POST' && url === '/message') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const bodyParsed = Buffer.concat(body).toString();
            const inputValue = bodyParsed.split('=')[1];
            fs.writeFile('sample.txt', inputValue, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
        })
    }
    
}

module.exports = requestHandler;