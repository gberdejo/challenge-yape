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

  return populate
}

export const getTransactionById = async (id: string) => {
  const transaction = await TransactionModel.findById(id)
    .populate('transactionStatus')
    .populate('transactionType')
  return transaction?.toObject()
}

export const getTransactionByTransactionExternalId = async (transactionExternalId: number) => {
  const transaction = await TransactionModel.findOne({ transactionExternalId })
    .populate('transactionStatus')
    .populate('transactionType')

  return transaction?.toObject()
}

export const getTransaction = () =>
  TransactionModel.find().populate('transactionStatus').populate('transactionType')

export const updateTransaction = async (
  transactionExternalId: number,
  transaction: Transaction
) => {
  await TransactionModel.findOneAndUpdate({ transactionExternalId }, transaction)
}
