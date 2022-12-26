import { Role } from '@app/entities/role/role';
import { makeRole } from '@test/factories/role-factory';
import { InMemoryRolesRepository } from '@test/repositories/in-memory-roles-repository';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { NotFound } from '../errors/not-found';
import { CreateUser } from './create-user';

describe('Create User', () => {
  let createUser: CreateUser;
  let role: Role;
  beforeEach(async () => {
    const usersRepository = new InMemoryUsersRepository();
    const rolesRepository = new InMemoryRolesRepository();
    role = makeRole();
    rolesRepository.create(role);
    createUser = new CreateUser(usersRepository, rolesRepository);
  });
  it('should be able create an user', async () => {
    const user = await createUser.execute({
      email: 'joedoe@joedoe.com',
      name: 'Joe Doe',
      password: 'P@sswor4',
      role: role.id,
      username: 'joedoe',
    });
    expect(user).toBeTruthy();
  });
  it('should be able create an user without role', async () => {
    expect(() => {
      return createUser.execute({
        email: 'joedoe@joedoe.com',
        name: 'Joe Doe',
        password: 'P@sswor4',
        role: 'role-id-random',
        username: 'joedoe',
      });
    }).rejects.toThrow(NotFound);
  });
});
