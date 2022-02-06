import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SearchColorService {

  private colorByNameApi = environment.colorNameApi;
  private colorByCodeApi = environment.colorCodeApi;
  constructor(private http: HttpClient) { }

  getColorDetails(colorName): Observable<any> {
    return this.http.get(this.colorByNameApi + colorName);
  }

  getColorDetailsByCode(colorCode): Observable<any> {
    return this.http.get(this.colorByCodeApi + colorCode)
  }
}
