import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Board } from '../entities/Board';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    const boardRepository = getRepository(Board);
    const newBoard = boardRepository.create(createBoardDto);
    return await boardRepository.save(newBoard);
  }

  async findAll(): Promise<Board[]> {
    const boardRepository = getRepository(Board);
    return await boardRepository.find();
  }

  async findOne(id: string): Promise<Board | null> {
    const boardRepository = getRepository(Board);
    const res = await boardRepository.findOne(id);
    if (res === undefined) return null;
    return res;
  }

  async update(
    id: string,
    updateBoardDto: UpdateBoardDto,
  ): Promise<Board | null> {
    const boardRepository = getRepository(Board);
    const res = await boardRepository.findOne(id);
    if (res === undefined || !id) return null;
    const updatedRes = await boardRepository.update(id, updateBoardDto);
    return updatedRes.raw;
  }

  async remove(id: string): Promise<boolean> {
    const boardRepository = getRepository(Board);
    const deletedRes = await boardRepository.delete(id);
    return !!deletedRes.affected;
  }
}
