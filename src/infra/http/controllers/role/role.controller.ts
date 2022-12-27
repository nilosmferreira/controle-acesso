import { CreateRole } from '@app/use-cases/role/create-role';
import { RoleViewModel } from '@infra/http/view-model/role-view-model';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

@Controller('perfil')
export class RoleController {
  constructor(private createRole: CreateRole) {}
  @Post()
  async create(@Body() body: { name: string; description: string }) {
    const { name, description } = body;
    try {
      const { role } = await this.createRole.execute({
        name,
        description,
      });
      return {
        perfil: RoleViewModel.toHTTP(role),
      };
    } catch (error) {
      if (error instanceof Error)
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
