export class NotComplexPassword extends Error {
  constructor() {
    super(
      'Senha tem de ter no mínimo 8 caracteres, maíusculas, minúsculas, números e caracteres especiais',
    );
  }
}
