import { TransactionTypeInputType } from 'types/index'
import * as transactionTypeService from '../services/transactionType.service'

export const typeDefs = `#graphql
    extend type Query {
        getTransactionTypes: [TransactionType]
    }

    extend type Mutation {
        createTransactionType(input: TransactionTypeInput): TransactionType
    }

    input TransactionTypeInput {
        name: String!
    }

    type TransactionType {
        _id: ID!
        tranferTypeId: Int!
        name: String!
        createdAt: String
        updatedAt: String
    }
`

export const resolvers = {
  Query: {
    getTransactionTypes: () => transactionTypeService.getTransactionTypes()
  },
  Mutation: {
    createTransactionType: (_: any, { input }: { input: TransactionTypeInputType }) =>
      transactionTypeService.createTransactionType(input)
  }
}
