import { NotComplexPassword } from '@app/use-cases/errors/not-complex-password';

export class Password {
  private password: string;
  validateComplexPassword(password: string): boolean {
    const reg =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    return reg.test(password);
  }
  constructor(password: string) {
    const isValidateComplexPassword = this.validateComplexPassword(password);
    if (!isValidateComplexPassword) throw new NotComplexPassword();
    this.password = password;
  }
}
