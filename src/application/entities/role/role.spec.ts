import { makeRole } from '@test/factories/role-factory';

describe('Role', () => {
  it('should be able to create a role', () => {
    const role = makeRole();
    expect(role).toBeTruthy();
    expect(role.createdAt).toEqual(expect.any(Date));
  });
});
