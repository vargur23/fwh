import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services';
import { List } from '../../poo';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: List[];

  constructor( private storageService: StorageService) { }

  ngOnInit() {
    this.lists = this.storageService.getLists();
  }

}
