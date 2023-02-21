import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  // userService: UserService;

  // constructor() {
  //   const userRepository = new UserRepository();
  //   this.userService = new UserService(userRepository);
  // }
  // constructor(private readonly userService: UserService) {}
  // constructor(private readonly moduleRef: ModuleRef) {}
  constructor(
    @Inject('UserService_Minh') private readonly userService: UserService,
  ) {}

  @Get()
  getAllUsers() {
    return [
      {
        name: 'minh',
        age: 8,
      },
      {
        name: 'Congminh',
        age: 7,
      },
    ];
  }

  @Get('/:id/:name')
  getUserId(
    @Param('id', ParseIntPipe) id: number,
    @Param('name') name: string,
  ) {
    try {
      return { id, name };
    } catch (err) {
      console.log(err);
      return 'asdasd';
    }
  }

  // @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    try {
      // const userReal = plainToClass(UserDto, user, {
      //   excludeExtraneousValues: true,
      // });
      return this.userService.createUser(user);
      // return this.moduleRef.get('UserService_Minh').createUser(user);
    } catch (err) {}
  }
}
