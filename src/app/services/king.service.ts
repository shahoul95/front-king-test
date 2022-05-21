import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {IKingfrench} from "../model/Ikingfrench";
@Injectable({
  providedIn: 'root'
})
export class KingService {
  constructor(private api: ApiService) {}

  getKingFrench(): Observable<Object> {
    return this.api.get("/king/getKing");
  }
}
