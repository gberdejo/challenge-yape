export type TransactionInputType = Readonly<{
  accountExternalIdDebit?: string;
  accountExternalIdCredit?: string;
  tranferTypeId?: number;
  value?: number;
}>;

export type TransactionStatusInputType = Readonly<{
  name?: string;
}>;

export type TransactionTypeInputType = Readonly<{
  name?: string;
}>;
