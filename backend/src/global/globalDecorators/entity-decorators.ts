import { applyDecorators } from '@nestjs/common'
import { FieldOptions, Field } from '@nestjs/graphql'
import { MaxLength } from 'class-validator'
import { Column } from 'typeorm'

export const Base_Entity = (options?: FieldOptions) =>
  applyDecorators(Field() as PropertyDecorator, Column() as PropertyDecorator)

export const Text_Dto = (options?: FieldOptions) =>
  applyDecorators(
    Field() as PropertyDecorator,
    MaxLength(500) as PropertyDecorator,
  )

export const Text_Entity = (options?: FieldOptions) =>
  applyDecorators(
    Column('varchar', { length: 500, nullable: true }),
    Field({ nullable: true }) as PropertyDecorator,
  )
