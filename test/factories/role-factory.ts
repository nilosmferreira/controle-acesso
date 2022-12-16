import { Role, RoleData } from '@app/entities/role/role';

type Override = Partial<RoleData>;

export function makeRole(override: Override = {}) {
  return new Role({
    name: 'name-fake',
    description: 'description-fake',
    ...override,
  });
}
