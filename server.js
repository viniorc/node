const http = require('http')

const PORT = 5000
const HOST = 'localhost'
const server = http.createServer((req, res) => {
    //console.log('oi');

    return res.end('vinicius agora esta rodando')
})

server.listen(PORT, HOST, () => {
    console.log(`Servidor rodando: http://${HOST}:${PORT}/`);
  }); 

