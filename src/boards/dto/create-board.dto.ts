import { IColumn } from 'src/interface/column.interface';

export class CreateBoardDto {
  public id?: string;
  public title: string;
  public columns: IColumn[];
}
