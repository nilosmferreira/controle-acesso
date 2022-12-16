import { Role } from '@app/entities/role/role';

export abstract class RolesRepository {
  abstract create(role: Role): Promise<void>;
  abstract save(role: Role): Promise<void>;
  abstract findByName(name: string): Promise<Role | null>;
}
