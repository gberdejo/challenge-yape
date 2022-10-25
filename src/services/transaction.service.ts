import { TransactionModel, Transaction } from '../models/transaction'
import { getTransactionStatusByName } from './transactionStatus.service'
import { getTransactionTypesById } from './transactionType.service'
import { TRANSACTION_STATUS } from '../utils/constants'

export const createTransaction = async (input: Transaction) => {
  const status = await getTransactionStatusByName(TRANSACTION_STATUS.PENDING)

  const type = await getTransactionTypesById(input.tranferTypeId!)

  const transaction = new TransactionModel({
    ...input,
    transactionStatus: status?.id,
    transactionType: type?.id
  })

  await transaction.save()
  const populate = await getTransactionById(transaction.id) // eslint-disable-line

  return populate?.toObject()
}

export const getTransactionById = (id: string) =>
  TransactionModel.findById(id).populate('transactionStatus').populate('transactionType')

export const getTransactionByTransactionExternalId = (transactionExternalId: number) =>
  TransactionModel.findOne({ transactionExternalId })
    .populate('transactionStatus')
    .populate('transactionType')

export const getTransaction = () =>
  TransactionModel.find().populate('transactionStatus').populate('transactionType')

export const updateTransaction = async (
  transactionExternalId: number,
  transaction: Transaction
) => {
  await TransactionModel.findOneAndUpdate({ transactionExternalId }, transaction)
}
