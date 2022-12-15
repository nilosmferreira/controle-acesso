import { Permission } from '@app/entities/permission/permission';
import { PermissionsRepository } from '@app/repositories/permissions-repository';
import { PermissionNameUnique } from '../errors/permission-name-unique';

interface CreatePermissionRequest {
  name: string;
  description: string;
}

interface CreatePermissionResponse {
  permission: Permission;
}

export class CreatePermission {
  constructor(private readonly permissionsRepository: PermissionsRepository) {}

  async execute(
    request: CreatePermissionRequest,
  ): Promise<CreatePermissionResponse> {
    const { name, description } = request;

    const permissionAlreadyExists = await this.permissionsRepository.findByName(
      name,
    );

    if (permissionAlreadyExists) {
      throw new PermissionNameUnique();
    }
    const permission = new Permission({
      name,
      description,
    });

    await this.permissionsRepository.create(permission);

    return {
      permission,
    };
  }
}
