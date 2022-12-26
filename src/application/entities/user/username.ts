import { WrongLength } from '@app/use-cases/errors/wrong-length';

export class Username {
  private username: string;
  validateLengthUsername(username: string) {
    return username.length >= 3 && username.length < 15;
  }
  constructor(username: string) {
    const isValidateLengthUsename = this.validateLengthUsername(username);
    if (!isValidateLengthUsename) {
      throw new WrongLength('Usuário', 3, 15);
    }
    this.username = username;
  }
  public get value(): string {
    return this.username;
  }
}
