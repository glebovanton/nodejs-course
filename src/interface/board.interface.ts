import {IColumn} from "src/interface/column.interface";

export interface IBoard {
    id?: string;
    title: string;
    columns: IColumn[];
}