import { WishlistService } from '../wishlist.service';
import { ProductListComponent } from './product-list.component';

describe('Testing product list (wishlist)', () => {
    const wishlistService = new WishlistService();
    const productListComponent = new ProductListComponent(wishlistService);

    const product = {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
    };

    const productFake = {
        name: 'Phone FAKE',
        price: 999,
        description: 'A FAKE PHONE'
    };

    it('Products list Component should properly invoke the add service method', () => {
        wishlistService.addToWishlist(product);
        expect(wishlistService.items.indexOf(product)).toBeGreaterThan(-1);
    });

    it('checkWishlist should work properly', () => {
        wishlistService.addToWishlist(product);
        expect(productListComponent.checkWishlist(product)).toBe(true);
        expect(productListComponent.checkWishlist(productFake)).toBe(false);
    });
});
