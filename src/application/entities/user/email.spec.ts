import { WrongFormat } from '@app/use-cases/errors/wrong-format';
import { Email } from './email';

describe('e-mail', () => {
  it('should be able create a e-mail', () => {
    const email = new Email('test@teste.com');
    expect(email).toBeTruthy();
  });
  it('should not be able create a email', () => {
    expect(() => {
      return new Email('aaaa');
    }).toThrow(WrongFormat);
  });
});
