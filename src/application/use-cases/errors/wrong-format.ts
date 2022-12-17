export class WrongFormat extends Error {
  constructor(field: string) {
    super(`O campo ${field} está em um formato inválido.`);
  }
}
