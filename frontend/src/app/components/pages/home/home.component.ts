import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothService } from 'src/app/services/cloth.service';
import { Cloth } from 'src/app/shared/models/clothes';

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
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.clothes = this.clothService.getAllClothesBySearchTerm(
          params.searchTerm
        );
      else this.clothes = clothService.getAll();
    });
  }
}
