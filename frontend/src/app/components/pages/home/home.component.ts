import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothService } from 'src/app/services/cloth.service';
import { Cloth } from 'src/app/shared/models/clothes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  clothes: Cloth[] = [];
  constructor(
    private clothService: ClothService,
    activatedRoute: ActivatedRoute
  ) {
    let clothesObservalbe: Observable<Cloth[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        clothesObservalbe = this.clothService.getAllClothesBySearchTerm(
          params.searchTerm
        );
      else clothesObservalbe = clothService.getAll();

      clothesObservalbe.subscribe((serverClothes) => {
        this.clothes = serverClothes;
      });
    });
  }
}
