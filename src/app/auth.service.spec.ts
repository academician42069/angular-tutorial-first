import { AuthService } from './auth.service';

describe('Auth service tests', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it('Default value of access should be false', () => {
    expect(service.isEnabled()).toBe(false);
  });

  it('Method allow should set access to true', () => {
    service.allow();
    expect(service.isEnabled()).toBe(true);
  });

  it('Method disallow should set access to false', () => {
    service.disallow();
    expect(service.isEnabled()).toBe(false);
  });

  it('Method isEnabled should return the access value', () => {
    expect(service.isEnabled()).toBe(service.access);
  });
});
