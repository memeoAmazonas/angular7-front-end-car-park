export class Car {
  id: string;
  time: number;
  model: string;
  empty: boolean;
  id_table: number;
  position: number;
  dateIngress: Date;
  departureDate: Date;
  numberAccess: number;
  positionPrevious: number;

  constructor(
    id_table = -1,
    empty= true,
    id: string = '',
    model: string = '',
    position: number = -1,
    dateIngress: Date = null,
    departureDate: Date = null,
    time: number = 0,
    numberAccess = 0,
    positionPrevious = -1
              ) {
    this.id_table = id_table;
    this.id = id;
    this.time = time;
    this.empty = empty;
    this.model = model;
    this.position = position;
    this.dateIngress = dateIngress;
    this.numberAccess = numberAccess;
    this.departureDate = departureDate;
    this.positionPrevious = positionPrevious;
  }

}
