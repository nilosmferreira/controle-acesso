import { Role } from '@app/entities/role/role';

export class RoleViewModel {
  static toHTTP(role: Role) {
    return {
      id: role.id,
      name: role.name,
      description: role.description,
    };
  }
}
