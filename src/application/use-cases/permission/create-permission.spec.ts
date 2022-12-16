import { InMemoryPermissionsRepository } from '@test/repositories/in-memory-permissions-repository';
import { FieldUnique } from '../errors/field-unique';
import { CreatePermission } from './create-permission';

describe('Create Permission', () => {
  it('should be able create a permission', async () => {
    const permissionsRepository = new InMemoryPermissionsRepository();
    const createPermission = new CreatePermission(permissionsRepository);

    const { permission } = await createPermission.execute({
      description: 'description-fake',
      name: 'name-fake',
    });

    expect(permissionsRepository.items).toHaveLength(1);
    expect(permissionsRepository.items[0]).toEqual(permission);
  });
  it('should not be able create a permission with same name', async () => {
    const permissionsRepository = new InMemoryPermissionsRepository();
    const createPermission = new CreatePermission(permissionsRepository);

    await createPermission.execute({
      description: 'description-fake',
      name: 'name-fake',
    });

    expect(() => {
      return createPermission.execute({
        description: 'description-fake',
        name: 'name-fake',
      });
    }).rejects.toThrow(FieldUnique);
  });
});
