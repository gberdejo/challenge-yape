import express from 'express'
import mongoose from 'mongoose'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { typeDefs, resolvers } from './schemas'

const app = express()

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen(4000, async () => {
  try {
    await mongoose.connect('mongodb://localhost:27018/yape')
    console.log('Connected to MongoDB🚀 and GraphQL🚀 is running on port 4000')
  } catch (error) {
    console.log(error)
  }
})
