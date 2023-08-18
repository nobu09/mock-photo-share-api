const { ApolloServer } = require('apollo-server')
const { readFileSync } = require('fs')

let typeDefs = readFileSync('./typeDefs.graphql', 'UTF-8')
const server = new ApolloServer({ typeDefs, mock: true })

server.listen()
