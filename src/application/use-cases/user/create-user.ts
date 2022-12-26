import { Email } from '@app/entities/user/email';
import { Password } from '@app/entities/user/password';
import { User } from '@app/entities/user/user';
import { Username } from '@app/entities/user/username';
import { RolesRepository } from '@app/repositories/roles-repository';
import { UsersRepository } from '@app/repositories/users-repository';
import { FieldUnique } from '../errors/field-unique';
import { NotFound } from '../errors/not-found';

interface CreateUserRequest {
  name: string;
  username: string;
  password: string;
  email: string;
  role: string;
}

interface CreateUserResponse {
  user: User;
}

export class CreateUser {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly rolesRepository: RolesRepository,
  ) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, username, password, email, role } = request;

    const userUsernameAlreadyExist = await this.usersRepository.findByUsername(
      username,
    );

    if (userUsernameAlreadyExist) {
      throw new FieldUnique('Perfil');
    }

    const userEmailAlreadyExist = await this.usersRepository.findByEmail(email);
    if (userEmailAlreadyExist) {
      throw new FieldUnique('e-Mail');
    }
    const roleAlreadyExist = await this.rolesRepository.findById(role);
    if (!roleAlreadyExist) {
      throw new NotFound('Perfil');
    }

    const user = new User({
      email: new Email(email),
      name,
      password: new Password(password),
      roleId: role,
      userName: new Username(username),
    });
    await this.usersRepository.create(user);

    return {
      user,
    };
  }
}
