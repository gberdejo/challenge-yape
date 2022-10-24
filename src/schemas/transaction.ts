export const typeDefs = `#graphql
    extend type Query {
        getTransactionById(id: String!): Transaction
    }

    type TransactionInput {
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

    type TransactionType {
        tranferTypeId: Int!
        name: String!
    }

    type TransactionStatus {
        name: String!
    }

`;

export const resolvers = {
  Query: {
    getTransactionById: (_: any, { id }: { id: string }) => {
      return {
        transactionExternalId: '123',
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
    },
  },
  //   Mutation: {
  //     createTransaction: (_: any, { name }: TransactionType) => {
  //       //   await createTransactionType({ name });
  //       return {
  //         message: 'Transaction created',
  //         status: 'success',
  //       };
  //     },
  //   },
};
