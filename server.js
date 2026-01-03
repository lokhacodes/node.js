
import http from 'node:http'
import {getDataFromDB} from './db.js'
const PORT = 8000

/*const animal = {
     type: 'elephant',
     nickName: 'Elon Tusk'
}

console.log(JSON.stringify(animal)) */


const server = http.createServer(async(req, res) =>{
     const destinations = await getDataFromDB()
   //  res.write(' this is some data \n')

     if(req.url === '/api' && req.method ==='GET'){
          res.setHeader ('Content-Type', 'application/json')
          res.statusCode = 200
          res.end(JSON.stringify(destinations))
     }else {
          res.setHeader ('Content-Type', 'application/json')
          res.statusCode = 404
          res.end (JSON.stringify({message: 'Route not found'}))
     }
    // res.end('hello from the server!', ()=>console.log('response end'))
})

server.listen (PORT, () => console.log(`server running on port: ${PORT}`))