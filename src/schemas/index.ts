import {
  typeDefs as TransactionTypeDefs,
  resolvers as TransactionResolvers,
} from './transaction';

export const typeDefsRoot = `#graphql
    type Query {
      _empty: String
    }
`;

export const typeDefs = [typeDefsRoot, TransactionTypeDefs];
export const resolvers = [TransactionResolvers];
