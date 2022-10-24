import { TransactionTypeModel, TransactionType } from '../models/transactionType'

export const getTransactionTypes = () => TransactionTypeModel.find()

export const getTransactionTypesById = (tranferTypeId: number) =>
  TransactionTypeModel.findOne({
    tranferTypeId
  })

export const createTransactionType = async ({
  name
}: TransactionType): Promise<TransactionType> => {
  const transactionType = new TransactionTypeModel({
    name: name?.toLowerCase()
  })

  await transactionType.save()

  return transactionType.toObject()
}
