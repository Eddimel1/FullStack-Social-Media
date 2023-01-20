export const getOperationMetaData = (val) => {
  const operationType = val.split('/')[0]
  const entityType = val.split('/')[1].split('_')[0]
  return {
    entityType,
    operationType,
  }
}


