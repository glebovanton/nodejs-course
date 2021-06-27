import { getRepository } from 'typeorm';
import { Board } from '../../entities/Board';

const getAllBoards = async (): Promise<Board[]> => {
  const boardRepository = getRepository(Board);
  const boards = await boardRepository.find();
  return boards;
};

const postBoard = async (dto: Board): Promise<Board> => {
  const boardRepository = getRepository(Board);
  const newBoard = boardRepository.create(dto);
  const savedBoard = await boardRepository.save(newBoard);
  return savedBoard;
};

const getBoardById = async (id: string): Promise<Board | null> => {
  const boardRepository = getRepository(Board);
  const res = await boardRepository.findOne(id);
  if (res === undefined) return null;
  return res;
};

const updateBoard = async (dto: Board): Promise<Board | null> => {
  const { id } = dto;
  const boardRepository = getRepository(Board);
  const res = await boardRepository.findOne(id);
  if (res === undefined || !id) return null;
  const updatedRes = await boardRepository.update(id, dto);
  return updatedRes.raw;
};

const deleteBoard = async (id: string): Promise<boolean> => {
  const boardRepository = getRepository(Board);
  const deletedRes = await boardRepository.delete(id);
  if (deletedRes.affected) return true;
  return false;
};

export { deleteBoard, getAllBoards, getBoardById, postBoard, updateBoard };
