import { TransactionInputType } from 'types/index'
import * as TransactionService from '../services/transaction.service'
import * as TransactionController from '../controllers/transaction.controller'

export const typeDefs = `#graphql
    extend type Query {
        getTransactionById(id: String!): Transaction
        getTransactionByTransactionExternalId(transactionExternalId: Int!): Transaction
        getTransaction: [Transaction]
    }

    extend type Mutation {
        createTransaction(input: TransactionInput): Transaction
    }

    input TransactionInput {
        accountExternalIdDebit: ID!
        accountExternalIdCredit: ID!
        tranferTypeId: Int!
        value: Int!
    }

    type Transaction {
        _id: ID!
        transactionExternalId: Int!
        accountExternalIdDebit: ID!
        accountExternalIdCredit: ID!
        tranferTypeId: Int!
        value: Int!
        transactionType: TransactionType
        transactionStatus: TransactionStatus
        createdAt: String
        updatedAt: String
    }
`

export const resolvers = {
  Query: {
    getTransactionById: (_: any, { id }: { id: string }) =>
      TransactionService.getTransactionById(id),
    getTransactionByTransactionExternalId: (
      _: any,
      { transactionExternalId }: { transactionExternalId: number }
    ) => TransactionService.getTransactionByTransactionExternalId(transactionExternalId),
    getTransaction: () => TransactionService.getTransaction()
  },
  Mutation: {
    createTransaction: (_: any, { input }: { input: TransactionInputType }) =>
      TransactionController.createTransaction(input)
  }
}
