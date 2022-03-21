import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
//import { map } from 'underscore';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl: string;
  public collection$!: Observable<Plant[]>;
  public subCollection$ = new Subject<Plant[]>();

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;

    this.collection$ = this.httpClient.get<Plant[]>(`${this.apiUrl}/list_products`).pipe(
      map((tabObj : any[]) => {
        return tabObj.map((obj: any) => {
          //return new Plant(obj)
          return new Plant(obj.product_name, obj.product_price,obj.product_quantity,obj.product_instock,obj.product_breadcrumb_label,obj.product_image_source,obj.product_rating,obj.id)
        })
      })
    );

  }

  public refreshCollection(): void {
    // On se sert de notre flux de donnée type observable froid
    this.collection$.subscribe((listPlant: Plant[]) => {
      // Utiliser un observable chaud (subject) pour nexter nos données recues de notre observable froid
      this.subCollection$.next(listPlant);
    })
  }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/list_products`);
  }

  onClickDelete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/list_products/${id}`).pipe(
      tap(() => this.refreshCollection())
    );
  }
}
