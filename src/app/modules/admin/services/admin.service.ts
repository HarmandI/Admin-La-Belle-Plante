import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public collection$!: Observable<Plant[]>;
  public subCollection$ = new Subject<Plant[]>();
  apiUrl: string;
  public plantCollection!: Plant[];

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.collection$ = this.httpClient.get<Plant[]>(`${this.apiUrl}/list_products`).pipe(
      // Ici on modifie l'objet que transporte notre Observable grâce à l'opérateur map()
      map((tabObj: any[]) => {
        //console.log("avant mapping: ", tabObj);
        // Ici grâce à la méthode .map() on transforme tout les objet json du tableau en instance de notre classe Plant()
        return tabObj.map((obj: any) => {
          return new Plant(obj.product_name, obj.product_price,obj.product_quantity,obj.product_instock,obj.product_breadcrumb_label,obj.product_image_source,obj.product_rating,obj.id);
        })
      }));
    //this.collection$ = this.httpClient.get<Plant[]>(`${this.apiUrl}/list_products`);
    //console.log(this.collection$);
  }

  public refreshCollection(): void {
    // On se sert de notre flux de donnée type observable froid
    this.collection$.subscribe((listPlant: Plant[]) => {
      this.plantCollection = [...listPlant];
      // Utiliser un observable chaud (subject) pour nexter nos données recues de notre observable froid
      this.subCollection$.next(listPlant);
    })
  }

  addPlant(plant: Plant): Observable<any> | void {
    return this.httpClient.post(`${this.apiUrl}/list_products`, plant);
  }
  onClickDelete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/list_products/${id}`).pipe(
      tap(() => this.refreshCollection())
    );
  }
  // getData(): Observable<any[]> {
  //   return this.httpClient.get<any[]>(`${this.apiUrl}/list_products`);
  // }

   /** Récupérer une plante par son Id **/
  getPlantById(id: any): Observable<Plant> {
    return this.httpClient.get<Plant>(`${this.apiUrl}/list_products/${id}`);
  }
  /** Modifier Plante **/
  updatePlant(plant: Plant): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/list_products/${plant.id}`, plant);
  }
}
