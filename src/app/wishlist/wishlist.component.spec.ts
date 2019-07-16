import { WishlistComponent } from './wishlist.component';
import { WishlistService } from '../wishlist.service';

describe('Testing Wishlist Component', () => {
    const wishlistService = new WishlistService();
    const wishlistComponent = new WishlistComponent(wishlistService);

    const product = {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
    };

    it('remove should properly invoke the service method', () => {
        wishlistService.addToWishlist(product);
        wishlistComponent.remove(product);

        expect(wishlistService.items.indexOf(product)).toBe(-1);
    });
});
