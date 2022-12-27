import { Role } from '@app/entities/role/role';
import { RolesRepository } from '@app/repositories/roles-repository';
import { Injectable } from '@nestjs/common';
import { FieldUnique } from '../errors/field-unique';

interface CreateRoleRequest {
  name: string;
  description: string;
}

export interface CreateRoleResponse {
  role: Role;
}
@Injectable()
export class CreateRole {
  constructor(private rolesRepository: RolesRepository) {}

  async execute(request: CreateRoleRequest): Promise<CreateRoleResponse> {
    const { name, description } = request;

    const roleAlreadyExists = await this.rolesRepository.findByName(name);

    if (roleAlreadyExists) {
      throw new FieldUnique('nome');
    }
    const role = new Role({
      name,
      description,
    });

    await this.rolesRepository.create(role);

    return {
      role,
    };
  }
}
