import { CreateRole } from '@app/use-cases/role/create-role';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { RoleController } from '../controllers/role/role.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RoleController],
  providers: [CreateRole],
})
export class RoleModule {}
