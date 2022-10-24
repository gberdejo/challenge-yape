import { typeDefs as TransactionTypeDefs, resolvers as TransactionResolvers } from './transaction'

import {
  typeDefs as TransactionStatusTypeDefs,
  resolvers as TransactionStatusResolvers
} from './transactionStatus'

import {
  typeDefs as TransactionTypeTypeDefs,
  resolvers as TransactionTypeResolvers
} from './transactionType'

export const typeDefsRoot = `#graphql
    type Query {
      _empty: String
    }

    type Mutation {
      _empty: String
    }
`

export const typeDefs = [
  typeDefsRoot,
  TransactionTypeDefs,
  TransactionStatusTypeDefs,
  TransactionTypeTypeDefs
]
export const resolvers = [
  TransactionResolvers,
  TransactionStatusResolvers,
  TransactionTypeResolvers
]
