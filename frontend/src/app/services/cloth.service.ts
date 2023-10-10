import { Injectable } from '@angular/core';
import { Cloth } from '../shared/models/clothes';
import { sample_clothes } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class ClothService {
  constructor() {}

  getAll(): Cloth[] {
    return sample_clothes;
  }

  getAllClothesBySearchTerm(searchTerm: string) {
    return this.getAll().filter((cloth) =>
      cloth.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getClothbyId(clothId: string): Cloth {
    return this.getAll().find((cloth) => cloth.id == clothId) ?? new Cloth();
  }
}
