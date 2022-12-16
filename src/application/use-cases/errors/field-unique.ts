export class FieldUnique extends Error {
  constructor(field: string) {
    super(`O campo ${field} deve ser único!`);
  }
}
