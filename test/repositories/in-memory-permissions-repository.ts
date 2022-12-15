import { Permission } from '@app/entities/permission/permission';
import { PermissionsRepository } from '@app/repositories/permissions-repository';

export class InMemoryPermissionsRepository implements PermissionsRepository {
  items: Permission[] = [];
  async create(permission: Permission): Promise<void> {
    this.items.push(permission);
  }
  async save(permission: Permission): Promise<void> {
    const permissionIndex = this.items.findIndex(
      (item) => item.id === permission.id,
    );
    if (permissionIndex >= 0) this.items[permissionIndex] = permission;
  }
  async findByName(name: string): Promise<Permission | null> {
    const permission = this.items.find((item) => item.name === name);
    return permission ?? null;
  }
}
