import {Item} from './item';

export class Invoice {
  date: string;
  dueDate: string;
  client: number;
  items: Item[];
  constructor(date: string, dueDate: string, client: number, items: Item[]) {
    this.date = date;
    this.dueDate = dueDate;
    this.client = client;
    this.items =  items;
  }
}
