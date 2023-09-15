import { MinLength, IsIn } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsIn(['stars', 'nunchucks'], { message: 'Use correct weapon!' })
  weapon: 'stars' | 'nunchucks';

  belt: string;
}
