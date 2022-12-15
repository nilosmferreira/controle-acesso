import { Permission } from '@app/entities/permission/permission';

export abstract class PermissionsRepository {
  abstract create(permission: Permission): Promise<void>;
  abstract save(permission: Permission): Promise<void>;
  abstract findByName(name: string): Promise<Permission>;
}
