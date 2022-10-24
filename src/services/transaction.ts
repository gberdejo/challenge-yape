import {
  TransactionTypeModel,
  TransactionType,
} from 'src/models/transactionType';

export const createTransactionType = async ({ name }: TransactionType) => {
  const transactionType = new TransactionTypeModel({
    name,
  });

  await transactionType.save();
};

export const getTransactionTypeById = async (tranferTypeId: number) => {
  const transactionType = await TransactionTypeModel.find({
    tranferTypeId,
  });

  return transactionType;
};
