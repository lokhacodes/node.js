
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
     }else if (req.url.startsWith('/api/continent') && req.method ==='GET'){
          const continent = req.url.split('/').pop()
          const filteredData = destinations.filter((destination) => {
               return destination.continent.toLowerCase() === continent.toLowerCase()
          })

          res.setHeader ('Content-Type', 'application/json')
          res.statusCode = 200
          res.end(JSON.stringify(filteredData))
     }

     else {
          res.setHeader ('Content-Type', 'application/json')
          res.statusCode = 404
          res.end (JSON.stringify({
               error : "not found",
               message : "Route not found"}))
     }
    // res.end('hello from the server!', ()=>console.log('response end'))
})

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`))