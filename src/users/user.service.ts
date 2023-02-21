import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
  //   constructor(userRepository: UserRepository) {}

  createUser(user: any): any {
    try {
      // const userReal = plainToClass(UserDto, user, {
      //   excludeExtraneousValues: true,
      // });
      return UserDto.plainToClass(user);
    } catch (err) {}
  }
}
