import { Role } from '@app/entities/role/role';
import { RolesRepository } from '@app/repositories/roles-repository';

export class InMemoryRolesRepository implements RolesRepository {
  items: Role[] = [];
  async create(role: Role): Promise<void> {
    this.items.push(role);
  }
  async save(role: Role): Promise<void> {
    const roleIndex = this.items.findIndex((item) => item.id === role.id);
    if (roleIndex >= 0) this.items[roleIndex] = role;
  }
  async findByName(name: string): Promise<Role | null> {
    const role = this.items.find((item) => item.name === name);
    return role ?? null;
  }
}
