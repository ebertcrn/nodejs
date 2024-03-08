function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // greeting text
        res.write('<html>');
        res.write('<head><h1>Welcome to Section 3 Assignment</h1></head>');
        res.write('<form action="/create-user" method="POST"><input name="usernameInput" type="text"><button type="submit">Submit</button></form>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        // users list
        res.write('<html>');
        res.write('<head><h1>Users list</h1></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        });
        return req.on('end', (chunk) => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            return res.end();
        })
    }

}

module.exports = requestHandler;