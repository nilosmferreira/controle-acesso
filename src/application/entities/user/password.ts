import { NotComplexPassword } from '@app/use-cases/errors/not-complex-password';
import { hashSync } from 'bcrypt';

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
  public get value(): string {
    return this.password;
  }
  public get hash(): string {
    const hashPassword = hashSync(this.password, 13);
    return hashPassword;
  }
}
