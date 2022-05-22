import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  searchKing : string = "";
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  searchKings() {
    this.messageEvent.emit(this.searchKing)
  }
}
