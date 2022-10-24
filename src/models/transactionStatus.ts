import { getModelForClass, prop, defaultClasses } from '@typegoose/typegoose';

export class TransactionStatus extends defaultClasses.TimeStamps {
  @prop({ type: String, unique: true, required: true })
  public name?: string;
}

export const TransactionStatusModel = getModelForClass(TransactionStatus, {
  schemaOptions: { collection: 'transactionStatus' },
});
