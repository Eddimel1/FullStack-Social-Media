import { PartialType } from '@nestjs/mapped-types';
import { CreateRestFileDto } from './create-rest-file.dto';

export class UpdateRestFileDto extends PartialType(CreateRestFileDto) {}
