import { MenuComponent } from './menu.component';

describe('Testing MenuComponent', () => {
    const menuComponent = new MenuComponent();

    it('Default value should be false', () => {
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(false);
    });

    it('Method showMenu should change isOpen to true', () => {
        menuComponent.showMenu();
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(true);
    });

    it('Method hideMenu should change isOpen to false', () => {
        menuComponent.hideMenu();
        const isOpen = menuComponent.isOpen;
        expect(isOpen).toBe(false);
    });

});
