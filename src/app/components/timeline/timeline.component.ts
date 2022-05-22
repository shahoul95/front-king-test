import { Component, OnInit } from '@angular/core';
import {KingService} from "../../services/king.service";
import {IKingfrench} from "../../interface/Ikingfrench";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  kings: Array<IKingfrench> = [];

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
}
