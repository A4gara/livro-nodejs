var http = require('http');
 
var server = http.createServer(function(request, response){
 
  response.writeHead(200, {"Content-Type": "text/html"});

  if(request.url == "/"){
    response.write("<h1>Página principal</h1>");
  }else if(request.url == "/bemvindo"){
    response.write("<h1>Bem-vindo :)</h1>");
  }else{
    response.write("<h1>Página não encontrada :(</h1>");
  }

  response.end();
});
 // devido a possivel ultilização de um codigo anterior na porta 3000
 // passe a usar um porta diferente eu usei a por 3001
 // o erro e apresentado como:
 //  events.js:72
 //       throw er; // Unhandled 'error' event
 // rode novamente o codigo como: node code.js ou nodejs code.js
 //tenha um otimo estudo.
server.listen(3001, function(){
  console.log('Servidor rodando!');
});
