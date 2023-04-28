import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/users')
export class UserController {
  @Get()
  getUsers() {
    return 'Helloooo users';
  }

  @Post()
  createUser() {
    console.log('user created');
  }
}
