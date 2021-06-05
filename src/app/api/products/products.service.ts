import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public getAll (): Observable<any> {
    const url = `${environment.urlAPI}/products`;
    return this.httpClient.get(url);
  }

  public getAllByCategory (idCategory: number): Observable<any> {
    const url = `${environment.urlAPI}/products`;
    const options = {
      params: { category: `${idCategory}` }
    }
    return this.httpClient.get(url, options);
  }
}
