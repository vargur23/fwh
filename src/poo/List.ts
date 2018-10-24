import { Unit } from './Unit';

export class List {
    name: string;
    active: boolean;
    faction: string;
    cost: number;
    data: Unit[];

    constructor() {
    this.name = 'default List';
    this.active = false;
    this.faction = '';
    this.cost = 0;
    this.data = [];
    }
  }
