import { PartialType } from '@nestjs/swagger';
import { CreateBettingDto } from './create-betting.dto';

export class UpdateBettingDto extends PartialType(CreateBettingDto) {}
