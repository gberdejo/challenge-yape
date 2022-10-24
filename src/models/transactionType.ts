import { AutoIncrementSimple } from '@typegoose/auto-increment';
import {
  getModelForClass,
  prop,
  defaultClasses,
  plugin,
} from '@typegoose/typegoose';

@plugin(AutoIncrementSimple, [{ field: 'tranferTypeId' }])
export class TransactionType extends defaultClasses.TimeStamps {
  @prop({ type: Number })
  public tranferTypeId?: number;

  @prop({ type: String })
  public name?: string;
}

export const TransactionTypeModel = getModelForClass(TransactionType);
