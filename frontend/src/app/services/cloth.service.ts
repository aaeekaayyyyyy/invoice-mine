import { Injectable } from '@angular/core';
import { Cloth } from '../shared/models/clothes';
import { sample_clothes } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CLOTHES_BY_ID_URL,
  CLOTHES_BY_SEARCH_URL,
  CLOTHES_URL,
} from '../shared/constants/url';

@Injectable({
  providedIn: 'root',
})
export class ClothService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Cloth[]> {
    return this.http.get<Cloth[]>(CLOTHES_URL);
  }

  getAllClothesBySearchTerm(searchTerm: string) {
    return this.http.get<Cloth[]>(CLOTHES_BY_SEARCH_URL + searchTerm);
  }

  getClothById(clothId: string): Observable<Cloth> {
    return this.http.get<Cloth>(CLOTHES_BY_ID_URL + clothId);
  }
}
