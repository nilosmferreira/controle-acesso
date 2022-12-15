import { makePermission } from '@test/factories/permission-factory';

describe('Permission', () => {
  it('should be able to create a permission', () => {
    const permission = makePermission();
    expect(permission).toBeTruthy();
    expect(permission.createdAt).toEqual(expect.any(Date));
  });
});
