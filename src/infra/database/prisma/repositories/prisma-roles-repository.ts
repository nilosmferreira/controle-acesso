import { Role } from '@app/entities/role/role';
import { RolesRepository } from '@app/repositories/roles-repository';
import { Injectable } from '@nestjs/common';
import { PrismaRoleMapper } from '../mapper/prisma-role-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaRolesRepository implements RolesRepository {
  constructor(private prisma: PrismaService) {}
  async create(role: Role): Promise<void> {
    const raw = PrismaRoleMapper.toPrisma(role);
    await this.prisma.role.create({
      data: raw,
    });
  }
  async save(role: Role): Promise<void> {
    const raw = PrismaRoleMapper.toPrisma(role);
    await this.prisma.role.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
  async findByName(name: string): Promise<Role | null> {
    const role = await this.prisma.role.findUnique({
      where: {
        name,
      },
    });
    if (!role) return null;
    return PrismaRoleMapper.toDomain(role);
  }
  async findById(id: string): Promise<Role | null> {
    const role = await this.prisma.role.findUnique({
      where: {
        id,
      },
    });
    if (!role) return null;
    return PrismaRoleMapper.toDomain(role);
  }
}
