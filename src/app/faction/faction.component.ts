import { Component, OnInit } from '@angular/core';
import { FactionService } from './service/faction.service';
import { Faction} from '../../poo';

@Component({
  selector: 'app-faction',
  templateUrl: './faction.component.html',
  styleUrls: ['./faction.component.css']
})
export class FactionComponent implements OnInit {

  factions: Faction[];
  constructor(private factionService: FactionService) { }

  ngOnInit() {
    this.getFactions();
  }

  getFactions(): void {
   this.factionService.getFactions().subscribe(factions => this.factions = factions);
  }

}
