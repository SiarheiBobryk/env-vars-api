const http = require('node:http');

http
  .createServer((req, res) => {
    const { ENV_A = '' } = process.env;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ ENV_A }));
    res.end();
  })
  .listen(3001);
