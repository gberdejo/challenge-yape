import { TransactionTypeInputType } from 'types/index';
import { TransactionTypeModel } from '../models/transactionType';

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
    }
`;

export const resolvers = {
  Query: {
    async getTransactionTypes() {
      const listSTypes = await TransactionTypeModel.find();
      return listSTypes;
    },
  },
  Mutation: {
    async createTransactionType(
      _: any,
      { input }: { input: TransactionTypeInputType },
    ) {
      const transactionType = new TransactionTypeModel({
        name: input.name,
      });

      transactionType.tranferTypeId =
        (await TransactionTypeModel.countDocuments()) + 1;

      await transactionType.save();

      return transactionType;
    },
  },
};
