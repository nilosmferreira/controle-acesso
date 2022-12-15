import {
  Permission,
  PermissionData,
} from '@app/entities/permission/permission';

type Override = Partial<PermissionData>;

export function makePermission(override: Override = {}) {
  return new Permission({
    name: 'name-fake',
    description: 'description-fake',
    ...override,
  });
}
