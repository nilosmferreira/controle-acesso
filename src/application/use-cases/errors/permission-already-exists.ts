export class PermissionAlreadyExists extends Error {
  constructor() {
    super('Permissão já existe!');
  }
}
