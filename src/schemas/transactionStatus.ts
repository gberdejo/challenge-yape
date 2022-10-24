import { TransactionStatusInputType } from 'types/index';
import { TransactionStatusModel } from '../models/transactionStatus';

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
    }
`;

export const resolvers = {
  Query: {
    async getTransactionStatus() {
      const listStatus = await TransactionStatusModel.find();
      return listStatus;
    },
  },
  Mutation: {
    async createTransactionStatus(
      _: any,
      { input }: { input: TransactionStatusInputType },
    ) {
      const transactionStatus = new TransactionStatusModel({
        name: input.name?.toLowerCase(),
      });

      await transactionStatus.save();

      return transactionStatus;
    },
  },
};
