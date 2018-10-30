import { Unit } from './Unit';

export class List {
    id: string;
    name: string;
    active: boolean;
    faction: string;
    cost: number;
    data: Unit[];

    constructor() {
    this.name = 'default List';
    this.setID();
    this.active = false;
    this.faction = '';
    this.cost = 0;
    this.data = [];
    }

    setID() {
      this.id = encodeURI(this.name);
    }
  }
