import { PartialType } from '@nestjs/mapped-types'

export class CreateRestFileDto {}

export class UpdateRestFileDto extends PartialType(CreateRestFileDto) {}
