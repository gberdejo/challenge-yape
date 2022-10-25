import {
  updateTransaction,
  getTransactionByTransactionExternalId
} from '../services/transaction.service'
import { emitter } from '../utils/kafka'
import { getTransactionStatusByName } from '../services/transactionStatus.service'
import { TRANSACTION_STATUS } from '../utils/constants'

emitter.on('validationTransaction', async (data: any) => {
  console.log('validationTransaction🚀')

  const transaction = (
    await getTransactionByTransactionExternalId(data.transactionExternalId)
  )?.toObject()

  console.log('transaction🚀', transaction)

  const status = await getTransactionStatusByName(TRANSACTION_STATUS.APPROVED)
  console.log('status🚀', status)

  try {
    await updateTransaction(transaction?.transactionExternalId!, {
      ...transaction,
      transactionStatus: status?.id
    })
  } catch (error) {
    console.log('error', error)
  }

  console.log('update success in transaction🚀')
})
