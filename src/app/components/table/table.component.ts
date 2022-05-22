import { Component, OnInit } from '@angular/core';
import {IKingfrench} from "../../interface/Ikingfrench";
import {KingService} from "../../services/king/king.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  kings: Array<IKingfrench> = [];
  message: string = "";
  constructor(private king : KingService) {
    this.getKings();
  }

  ngOnInit(): void {
  }

  getKings(){
    this.king
      .getKingFrench()
      .subscribe(king => {
        this.kings = king;
      });
  }

  receiveMessage($event: string) {
    this.message = $event;
  }
}
