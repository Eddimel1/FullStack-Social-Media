import { SetMetadata } from '@nestjs/common'

export const IS_PUBLIC_KEY_GROUP = 'isPublic-group'
export const Public = () => SetMetadata(IS_PUBLIC_KEY_GROUP, true)
