import {Component, Input, OnInit} from '@angular/core';
import {IKingfrench} from "../../interface/Ikingfrench";

@Component({
  selector: 'app-description-king-french',
  templateUrl: './description-king-french.component.html',
  styleUrls: ['./description-king-french.component.scss']
})
export class DescriptionKingFrenchComponent implements OnInit {
  @Input() king :any;
  constructor() {}

  ngOnInit(): void {
  }

}
