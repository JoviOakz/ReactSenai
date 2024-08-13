import fastify from 'fastify'

const server = fastify();

server.get('/user',() => {
    return "Olá user!"
})

server.get('/',() => {
    return "Olá mundo!"
})

server.listen({ port: 3333 }).then(() => {
    console.log("Server running")
})