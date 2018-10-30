export class Unit {
    id: string;
    name: string;
    faction_id: string;
    cost: number;
    unique: boolean;
    does_cary: string[];
    hero: boolean;
    leader: string[];
    perks: string[];
    armor: string[];
    heavy_weapons: string[];
    weapons: string[];
    cc_weapons: string[];
    hand_weapons: string[];
    granates: string[];
    mines: string[];
    consumables: string[];

    constructor( ) {
      this.unique = false;
      this.hero = false;
      this.leader = [];
      this.perks = [];
      this.armor = [];
      this.heavy_weapons = [];
      this.weapons = [];
      this.cc_weapons = [];
      this.hand_weapons = [];
      this.granates = [];
      this.mines = [];
      this.consumables = [];
    }
  }
