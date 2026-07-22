import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { pageSeoType } from './pageSeoType'
import { serviceSeoType } from './serviceSeoType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, pageSeoType, serviceSeoType],
}
