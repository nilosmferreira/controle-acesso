import { Email } from '@app/entities/user/email';
import { Password } from '@app/entities/user/password';
import { User, UserData } from '@app/entities/user/user';
import { Username } from '@app/entities/user/username';

type Override = Partial<UserData>;

export function makeUser(override: Override = {}) {
  return new User({
    email: new Email('joedoe@joedoe.com'),
    firstName: 'Joe',
    lastName: 'Doe',
    password: new Password('P@sswor4'),
    userName: new Username('joedoe'),
    ...override,
  });
}
