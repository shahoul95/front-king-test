import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private static updateUrl(req: string): string {
    return environment.origin + req;
  }

  get(url: string): Observable<Object> {
    url = ApiService.updateUrl(url);
    return this.http.get(url);
  }
}
