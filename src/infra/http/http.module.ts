import { Module } from '@nestjs/common';
import { RoleModule } from './modules/role.module';

@Module({
  imports: [RoleModule],
})
export class HttpModule {}
