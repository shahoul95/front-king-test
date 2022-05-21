import { Component, OnInit } from '@angular/core';
import {KingService} from "../services/king.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public kings: any;

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
