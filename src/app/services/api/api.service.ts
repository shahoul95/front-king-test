import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IKingfrench} from "../../interface/Ikingfrench";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private static updateUrl(req: string): string {
    return environment.origin + req;
  }

  get(url: string): Observable<IKingfrench[]> {
    url = ApiService.updateUrl(url);
    return this.http.get<IKingfrench[]>(url);
  }
}
