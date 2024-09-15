import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class FindTracksDto {
  @Min(1, { message: 'Invalid page number' })
  @IsInt({ message: 'Invalid page number' })
  @Type(() => Number)
  page: number = 1;
}
