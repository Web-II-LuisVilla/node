// const http = require('http')
// const port =3000

// const server = http.createServer((req,res)=> {
//     res.end('Respuesta')
// })

// server.listen(port, ()=> console.log('Servidor funciona'))

const express = require ('express')
const app = express()
const port = 3001

app.get('/', (req, res)=>{
    res.send("Hola mundo")
})
app.listen(port)