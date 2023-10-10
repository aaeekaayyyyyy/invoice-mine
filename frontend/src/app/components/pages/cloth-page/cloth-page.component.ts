import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ClothService } from 'src/app/services/cloth.service';
import { Cloth } from 'src/app/shared/models/clothes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cloth-page',
  templateUrl: './cloth-page.component.html',
  styleUrls: ['./cloth-page.component.css'],
})
export class ClothPageComponent {
  cloth!: Cloth;
  constructor(
    activatedRoute: ActivatedRoute,
    clothService: ClothService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.cloth = clothService.getClothbyId(params.id);
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.cloth);
    this.router.navigateByUrl('/cart-page');
  }
}
