import { TransactionStatusModel, TransactionStatus } from '../models/transactionStatus'
import { TransactionStatusInputType } from '../../types/index'

export const getTransactionStatus = () => TransactionStatusModel.find()

export const getTransactionStatusByName = (name: string) =>
  TransactionStatusModel.findOne({
    name
  })

export const createTransactionStatus = async ({
  name
}: TransactionStatusInputType): Promise<TransactionStatus> => {
  const transactionStatus = new TransactionStatusModel({
    name: name?.toLowerCase()
  })

  await transactionStatus.save()

  return transactionStatus.toObject()
}
