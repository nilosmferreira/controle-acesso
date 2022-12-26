import { User } from '@app/entities/user/user';
import { UsersRepository } from '@app/repositories/users-repository';

export class InMemoryUsersRepository extends UsersRepository {
  items: User[] = [];
  async findById(id: string): Promise<User | null> {
    const user = this.items.find((item) => item.id === id);

    return user ?? null;
  }
  async findByUsername(username: string): Promise<User | null> {
    const user = this.items.find((item) => item.userName.value === username);

    return user ?? null;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((item) => item.email.value === email);

    return user ?? null;
  }
  async create(data: User): Promise<void> {
    this.items.push(data);
  }
  async save(data: User): Promise<void> {
    const findIndex = this.items.findIndex((item) => item.id === data.id);
    data.update();
    this.items[findIndex] = data;
  }
}
