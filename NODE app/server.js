
import http from 'node:http'
import path from 'node:path'
import { serverStatic } from './utils/serverStatic.js'
import fs from  'node:fs'


const PORT = 8000
const __dirname = import.meta.dirname


// node "NODE app/server.js"

const server = http.createServer((req, res) => {
   //const pathToResource = path.join(__dirname, 'public', 'index.html');//absolute path
   serverStatic(__dirname); 
   const content = fs.readFileSync(pathToResource, 'utf-8')
   res.setHeader('Content-Type', 'text/html');
   res.statusCode = 200;
   // res.writeHead(200,{'Content-Type':'text/html'});
    res.end(content);
})

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`))