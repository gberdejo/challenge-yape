import {
  getModelForClass,
  prop,
  defaultClasses,
  Ref,
} from '@typegoose/typegoose';
import { nanoid } from 'nanoid';
import { TransactionStatus } from './transactionStatus';
import { TransactionType } from './transactionType';

export class Transaction extends defaultClasses.TimeStamps {
  @prop({ type: String, default: () => nanoid() })
  public transactionExternalId?: string;

  @prop({ type: String })
  public accountExternalIdDebit?: string;

  @prop({ type: String })
  public accountExternalIdCredit?: string;

  @prop({ type: Number })
  public tranferTypeId?: number;

  @prop({ type: Number })
  public value?: number;

  @prop({ ref: () => TransactionType })
  public transactionType?: Ref<TransactionType>;

  @prop({ ref: () => TransactionStatus })
  public transactionStatus?: Ref<TransactionStatus>;
}

export const TransactionModel = getModelForClass(Transaction);
