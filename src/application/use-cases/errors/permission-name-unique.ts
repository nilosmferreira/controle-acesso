export class PermissionNameUnique extends Error {
  constructor() {
    super('O nome da permissão deve ser única!');
  }
}
