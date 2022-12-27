import { Role } from '@app/entities/role/role';
import { Role as RawRole } from '@prisma/client';

export class PrismaRoleMapper {
  static toPrisma(role: Role): RawRole {
    return {
      createdAt: role.createdAt,
      description: role.description,
      id: role.id,
      name: role.name,
      updatedAt: role.updatedAt,
    };
  }
  static toDomain(raw: RawRole): Role {
    return new Role(
      {
        description: raw.description,
        updatedAt: raw.updatedAt,
        name: raw.name,
      },
      raw.id,
    );
  }
}
