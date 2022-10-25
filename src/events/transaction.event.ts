import {
  updateTransaction,
  getTransactionByTransactionExternalId
} from '../services/transaction.service'
import { emitter } from '../utils/kafka'
import { getTransactionStatusByName } from '../services/transactionStatus.service'
import { TRANSACTION_STATUS } from '../utils/constants'
import { validationTransactionInputType } from '../../types/index'

emitter.on('validationTransaction', async (data: any) => {
  console.log('validationTransaction🚀', data)

  const { transactionExternalId } = data as validationTransactionInputType

  const transaction = await getTransactionByTransactionExternalId(transactionExternalId)

  const validationTransaction =
    transaction?.value! > 1000 ? TRANSACTION_STATUS.REJECTED : TRANSACTION_STATUS.APPROVED

  const status = await getTransactionStatusByName(validationTransaction)
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
