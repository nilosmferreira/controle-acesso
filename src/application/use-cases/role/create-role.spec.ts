import { InMemoryRolesRepository } from '@test/repositories/in-memory-roles-repository';
import { FieldUnique } from '../errors/field-unique';
import { CreateRole } from './create-role';

describe('Create Role', () => {
  it('should be able create a role', async () => {
    const rolesRepository = new InMemoryRolesRepository();
    const createRole = new CreateRole(rolesRepository);

    const { role } = await createRole.execute({
      description: 'description-fake',
      name: 'name-fake',
    });

    expect(rolesRepository.items).toHaveLength(1);
    expect(rolesRepository.items[0]).toEqual(role);
  });
  it('should not be able create a permission with same name', async () => {
    const rolesRepository = new InMemoryRolesRepository();
    const createRole = new CreateRole(rolesRepository);

    await createRole.execute({
      description: 'description-fake',
      name: 'name-fake',
    });

    expect(() => {
      return createRole.execute({
        description: 'description-fake',
        name: 'name-fake',
      });
    }).rejects.toThrow(FieldUnique);
  });
});
