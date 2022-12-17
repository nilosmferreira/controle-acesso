import { NotComplexPassword } from '@app/use-cases/errors/not-complex-password';
import { Password } from './password';

describe('Password', () => {
  it('should be able create a password', () => {
    const password = new Password('P@sswor4');
    expect(password).toBeTruthy();
  });
  it('should not be able create a password', () => {
    expect(() => {
      return new Password('aaaa');
    }).toThrow(NotComplexPassword);
  });
});
