import { getModelForClass, prop, defaultClasses } from '@typegoose/typegoose';

export class TransactionStatus extends defaultClasses.TimeStamps {
  @prop({ type: String })
  public name?: string;
}

export const TransactionStatusModel = getModelForClass(TransactionStatus);
