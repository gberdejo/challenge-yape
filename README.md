# challenge-yape

## 🛠 Skills
Typescript, NodeJs, Graphql, MongoDB...

## Crear 3 registros para transactionType
* deposit
* withdraw
* transfer

### Usage/Examples

```javascript
mutation{
  createTransactionType(input:{
    name: "transfer"
  }){
    _id
    tranferTypeId
    name
  }
}
```

## Crear 3 registros para transactionStatus
* pending
* approved
* rejected

### Usage/Examples

```javascript
mutation{
  createTransactionStatus(input:{
    name: "approved"
  }){
    _id
    name
  }
}
```

## Crear o recuperar una transaction

### Usage/Examples

```javascript
mutation{
  createTransaction(input:{
    accountExternalIdDebit: "123"
    accountExternalIdCredit: "123"
    tranferTypeId: 85669
    value: 1001
  }){
    _id
    transactionExternalId
    accountExternalIdDebit
    accountExternalIdCredit
    tranferTypeId
    transactionType{
      tranferTypeId
      name
    }
    transactionStatus{
      name
    }
  }
}
```

### Usage/Examples 

```javascript
query{
  getTransactionByTransactionExternalId(transactionExternalId:85603012){
    _id
    transactionExternalId
    accountExternalIdDebit
    accountExternalIdCredit
    value
    transactionType{
      name
    }
    transactionStatus{
      name
    }
  }
}
```

