const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    const persona = {
        id: 1,
        nombre: 'Alex'
    }
    res.write(JSON.stringify(persona));
    res.end();

}).listen(8084);

console.log('escuchando el puerto 8084');