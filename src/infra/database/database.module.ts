import { RolesRepository } from '@app/repositories/roles-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaRolesRepository } from './prisma/repositories/prisma-roles-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: RolesRepository,
      useClass: PrismaRolesRepository,
    },
  ],
  exports: [RolesRepository],
})
export class DatabaseModule {}
