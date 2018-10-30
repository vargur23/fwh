import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StorageService } from '../../services';
import { Unit, List } from '../../poo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List;
  units: Unit[];

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id_list');
    this.list = this.storageService.getList(id);
    if (this.list) {
      this.units = this.list.data;
    }
  }

}
