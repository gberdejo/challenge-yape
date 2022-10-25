import { emit } from '../utils/kafka'
import { TransactionInputType } from 'types/index'
import * as TransactionService from '../services/transaction.service'

export const createTransaction = async (input: TransactionInputType) => {
  const transaction = await TransactionService.createTransaction(input)

  await emit('validationTransaction', { transactionExternalId: transaction?.transactionExternalId })

  return transaction
}
