import { User } from '@app/entities/user/user';

export abstract class UsersRepository {
  abstract findById(id: string): Promise<User | null>;
  abstract findByUsername(username: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract create(data: User): Promise<void>;
  abstract save(data: User): Promise<void>;
}
