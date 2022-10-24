import { TransactionInputType } from 'types/index';
import { TransactionStatusModel } from '../models/transactionStatus';

const mockData = {
  transactionExternalId: '1',
  accountExternalIdDebit: '123',
  accountExternalIdCredit: '123',
  tranferTypeId: 123,
  value: 123,
  transactionType: {
    tranferTypeId: 123,
    name: '123',
  },
  transactionStatus: {
    name: '123',
  },
};

export const typeDefs = `#graphql
    extend type Query {
        getTransactionById(id: String!): Transaction
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

    type Response {
        message: String
    }

    type Transaction {
        transactionExternalId: ID!
        accountExternalIdDebit: ID!
        accountExternalIdCredit: ID!
        tranferTypeId: Int!
        value: Int!
        transactionType: TransactionType
        transactionStatus: TransactionStatus
    }
`;

export const resolvers = {
  Query: {
    getTransactionById: (_: any, { id }: { id: string }) => {
      const res = mockData;
      res.transactionExternalId = id;
      return res;
    },
  },
  Mutation: {
    async createTransaction(_: any, transactionInput: TransactionInputType) {
      console.log(transactionInput);
      const transactionStatus = new TransactionStatusModel({
        name: '123',
      });
      console.log(transactionStatus);
      await transactionStatus.save();
      return mockData;
    },
  },
};
