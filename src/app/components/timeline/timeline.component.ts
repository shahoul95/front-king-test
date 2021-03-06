import { Component, OnInit } from '@angular/core';
import {KingService} from "../../services/king/king.service";
import {IKingfrench} from "../../interface/Ikingfrench";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  kings: Array<IKingfrench> = [];
  title : string = "Monarchie Roi de France - Les Bourbons"
  constructor(private king : KingService) {
     this.getKings();
  }

  ngOnInit(): void {
  }

  getKings(){
    try {
      this.king
        .getKingFrench()
        .subscribe(king => {
          this.kings = king;
        });
    } catch (error){
      return error;
    }
  }
}
