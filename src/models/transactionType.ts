import { getModelForClass, prop, defaultClasses } from '@typegoose/typegoose';

export class TransactionType extends defaultClasses.TimeStamps {
  @prop({ type: Number, unique: true, required: true })
  public tranferTypeId?: number;

  @prop({ type: String })
  public name?: string;
}

export const TransactionTypeModel = getModelForClass(TransactionType, {
  schemaOptions: { collection: 'transactionTypes' },
});
