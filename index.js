const express = require('express')

//instanciando o Expresss
const server = express();

//Fazendo o Express 'entender' JSON
server.use(express.json());

//Middleware Global
server.use((req,res, next) => {
  console.log('Middlaware Global');
  return next();
})

//Middleware Local
function middlewarelocal(req,res,next) {
  console.log("MidLocal1");
  return next();
}
function middlewarelocal2(req,res,next) {
  console.log("MidLocal2");
  return next();
}

//routeMain
server.get("/", (req, res) => {
  return res.send("Tela inicial");
})

//route1
server.get("/teste",middlewarelocal, (req, res) =>{
  return res.send("Hello World!");
})

//route2
server.get("/teste2",middlewarelocal2, (req, res) =>{
  return res.send("Houston we have a problem!");
})

server.listen(3000)
