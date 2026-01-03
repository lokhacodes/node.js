
import http from 'node:http'
import {getDataFromDB} from './db.js'
import { sendJSONResponse } from './sendJSONResponse.js'
import { getDataByParams } from './getDataByParams.js'
import { getDataByQueryParams } from './getDataByQueryParams.js'

const PORT = 8000

/*const animal = {
     type: 'elephant',
     nickName: 'Elon Tusk'
}

console.log(JSON.stringify(animal)) */
//node "The wild horizons api/server.js"

const server = http.createServer(async(req, res) =>{
     const destinations = await getDataFromDB()
   //  res.write(' this is some data \n')


     const urlObj = new URL(req.url, `http://${req.headers.host}`)
     const queryObj = Object.fromEntries(urlObj.searchParams)

     if(urlObj.pathname === '/api' && req.method ==='GET'){
          let filteredData = getDataByQueryParams(destinations, queryObj)
         sendJSONResponse(res, 200, filteredData)
     }else if (req.url.startsWith('/api/continent') && req.method ==='GET'){
          const continent = req.url.split('/').pop()
          const filteredData = getDataByParams(destinations, 'continent', continent)

          sendJSONResponse(res, 200, filteredData)
     }
     else if (req.url.startsWith('/api/country') && req.method ==='GET'){
          const country = req.url.split('/').pop()
          const filteredData = getDataByParams(destinations, 'country', country)

          sendJSONResponse(res, 200, filteredData)
     }
     else {
          sendJSONResponse(res, 404, {
               error : "not found",
               message : "Route not found"
          })
     }
    // res.end('hello from the server!', ()=>console.log('response end'))
})

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`))