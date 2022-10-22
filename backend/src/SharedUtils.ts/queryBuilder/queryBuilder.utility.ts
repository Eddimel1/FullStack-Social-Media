import { SelectQueryBuilder } from 'typeorm'

export const _loadAllRelationships = <T>(
  queryBuilder: SelectQueryBuilder<T>,
  joins: string[],
  repositoryAlias: string,
  joinType: 'inner' | 'left',
) => {
  const query_builder_copy = queryBuilder
  if (joinType === 'inner') {
    joins.forEach((join) => {
      query_builder_copy.innerJoinAndSelect(
        `${repositoryAlias}.${join}`,
        `${join}`,
      )
    })
  } else if (joinType === 'left') {
    joins.forEach((join) => {
      query_builder_copy.leftJoinAndSelect(
        `${repositoryAlias}.${join}`,
        `${join}`,
      )
    })
  }
  console.log(query_builder_copy)
  return query_builder_copy
}
