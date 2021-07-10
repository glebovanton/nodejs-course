import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Body,
  Put,
  Param,
  Res,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../entities/User';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return User.toResponse(user);
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => User.toResponse(user));
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    return user
      ? res.status(HttpStatus.OK).json(User.toResponse(user))
      : res.status(HttpStatus.NOT_FOUND).json({
          message: 'User not found',
        });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(id, updateUserDto);
    return User.toResponse(user);
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const isRemoved = await this.usersService.remove(id);
    return isRemoved
      ? res.status(HttpStatus.NO_CONTENT).json({
          message: 'The user has been deleted',
        })
      : res.status(HttpStatus.NOT_FOUND).json({
          message: 'User not found',
        });
  }
}
