import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist;
  items;

  constructor(wishlist: WishlistService) {
    this.wishlist = wishlist;
    this.items = wishlist.items;
  }

  remove(product) {
    this.wishlist.removeFromWishlist(product);
  }

  ngOnInit() {
  }

}
