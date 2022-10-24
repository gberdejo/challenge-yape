import { TransactionStatusInputType } from 'types/index'
import * as TransactionStatusService from '../services/transactionStatus.service'

export const typeDefs = `#graphql
    extend type Query {
        getTransactionStatus: [TransactionStatus]
    }

    extend type Mutation {
        createTransactionStatus(input: TransactionStatusInput): TransactionStatus
    }

    input TransactionStatusInput {
        name: String!
    }

    type TransactionStatus {
        _id: ID!
        name: String!
        createdAt: String
        updatedAt: String
    }
`

export const resolvers = {
  Query: {
    getTransactionStatus: () => TransactionStatusService.getTransactionStatus()
  },
  Mutation: {
    createTransactionStatus: (_: any, { input }: { input: TransactionStatusInputType }) =>
      TransactionStatusService.createTransactionStatus(input)
  }
}
