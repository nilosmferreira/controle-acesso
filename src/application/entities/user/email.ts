import { WrongFormat } from '@app/use-cases/errors/wrong-format';

export class Email {
  private email: string;
  validateEmailFormat(email: string): boolean {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    return reg.test(email);
  }
  constructor(email: string) {
    const isValidateEmailFormat = this.validateEmailFormat(email);
    if (!isValidateEmailFormat) throw new WrongFormat('e-mail');
    this.email = email;
  }
  public get value(): string {
    return this.email;
  }
}
