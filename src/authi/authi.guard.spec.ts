import { AuthiGuard } from './authi.guard';

describe('AuthiGuard', () => {
  it('should be defined', () => {
    expect(new AuthiGuard()).toBeDefined();
  });
});
