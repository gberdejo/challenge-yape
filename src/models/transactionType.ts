import { getModelForClass, prop, defaultClasses } from '@typegoose/typegoose'
import { customAlphabet } from 'nanoid'

export class TransactionType extends defaultClasses.TimeStamps {
  @prop({
    type: Number,
    unique: true,
    default: () => Number(customAlphabet('1234567890', 5)())
  })
  public tranferTypeId?: number

  @prop({ type: String, unique: true, required: true })
  public name?: string

  public static getTransactionType(data: TransactionType) {
    return {
      ...data,
      createdAt: data.createdAt!.toISOString(),
      updatedAt: data.updatedAt!.toISOString()
    }
  }
}

export const TransactionTypeModel = getModelForClass(TransactionType, {
  schemaOptions: { collection: 'transactionTypes' }
})
