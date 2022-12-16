export class AlreadyExists extends Error {
  constructor(name: string) {
    super(`${name} já existe!`);
  }
}
