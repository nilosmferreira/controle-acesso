export class WrongLength extends Error {
  constructor(field: string, min: number, max: number) {
    super(
      `O campo ${field} deve ter no mínimo ${min} e no máximo ${max} caracteres.`,
    );
  }
}
