import { Component, OnInit } from '@angular/core';
import {Url} from "../../models/Url";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  urls: Array<Url> = [];
  constructor() {
    this.urls = [
      new Url(
        'TimeLine',
        '/timeline'
      ),
      new Url(
        'Recherches des Rois de France',
        '/tabs'
      )
    ]
  }

  ngOnInit(): void {
  }

}
