// import { Expose } from 'class-transformer/types/decorators';
import { Expose } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { BaseDto } from 'src/common/base.dto';

export class UserDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  username: string;

  @IsNotEmpty()
  @Length(5, 15)
  @Expose()
  password: string;
}
