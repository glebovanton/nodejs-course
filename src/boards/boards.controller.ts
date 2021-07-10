import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto) {
    return await this.boardsService.create(createBoardDto);
  }

  @Get()
  async findAll() {
    return await this.boardsService.findAll();
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const board = await this.boardsService.findOne(id);
    return board
      ? res.status(HttpStatus.OK).json(board)
      : res.status(HttpStatus.NOT_FOUND).json({
          message: 'Board not found',
        });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return await this.boardsService.update(id, updateBoardDto);
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const isRemoved = await this.boardsService.remove(id);
    return isRemoved
      ? res.status(HttpStatus.NO_CONTENT).json({
          message: 'The board has been deleted',
        })
      : res.status(HttpStatus.NOT_FOUND).json({
          message: 'Board not found',
        });
  }
}
