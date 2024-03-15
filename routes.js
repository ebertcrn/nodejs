const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input name="messageInserted" type="text"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(`chunk: `, chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(`parsedBody: `, parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                // console.log(err);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Title</title></head>');
    res.write('<body><h1>Hello from my NodeJS server</h1></body>');
    res.write('</html>');
    res.end();
}

//  EXPORT SYNTAXES
 module.exports = requestHandler;
//  module.exports = {
//      handler: requestHandler,
//      someText: 'some hard coded text'
//  }
//  module.exports.handler = requestHandler;
//  exports.handler = requestHandler;
//  module.exports.someText = 'Some hard coded text';
//  exports.someText = 'Some hard coded text';
