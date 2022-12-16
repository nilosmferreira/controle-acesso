export class NotFound extends Error {
  constructor(name: string) {
    super(`${name} não encontrada!`);
  }
}
