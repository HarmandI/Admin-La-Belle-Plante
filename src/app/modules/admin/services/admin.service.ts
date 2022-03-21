import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/list_products`);
  }

  addPlant(plant: Plant): Observable<any> | void {
    return this.httpClient.post(`${this.apiUrl}`, plant);
  }
}
