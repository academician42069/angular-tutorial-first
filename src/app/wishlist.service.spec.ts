import { WishlistService } from './wishlist.service';

describe('Testing Wishlist Service', () => {
    let wishlistService: WishlistService;

    const product = {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
    };

    const product1 = {
        name: 'PhonezEfwefoi eoiuahfoiwehf',
        price: 705,
        description: 'A great phone with one of the best OIAFUH'
    };

    beforeEach(() => {
        wishlistService = new WishlistService();
        wishlistService.addToWishlist(product);
        wishlistService.addToWishlist(product1);
    });

    it('addToWishlist should not break on itself', () => {
        const index = wishlistService.items.indexOf(product);

        wishlistService.addToWishlist(product);
        wishlistService.addToWishlist(product);

        wishlistService.addToWishlist({
            name: 'PhEfwefoi eoiuahfoiwehf',
            price: 75,
            description: 'At phone with one of the best OIAFUH'
        });

        wishlistService.addToWishlist({
            name: 'PhEfweeuahfoiwehf',
            price: 753,
            description: 'A poe with one of the best OIAFUH'
        });

        expect(index).toBeGreaterThan(-1);
        expect(wishlistService.items.indexOf(product, index)).toBe(index);
    });

    it('removeFromWishlist should delete the item', () => {
        wishlistService.removeFromWishlist(product);
        expect(wishlistService.items.indexOf(product)).toBe(-1);
    });

    it('clearWishlist should wipe items', () => {
        wishlistService.clearWishlist();
        expect(wishlistService.items.toString()).toBe([].toString());
    });

});
