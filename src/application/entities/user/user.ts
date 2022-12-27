import { randomUUID } from 'node:crypto';
import { Replace } from '@helpers/replace';
import { Password } from './password';
import { Username } from './username';
import { Email } from './email';

export interface UserData {
  firstName: string;
  lastName: string;
  userName: Username;
  email: Email;
  password: Password;
  createdAt: Date;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
}
export class User {
  private _id: string;
  private data: UserData;

  constructor(data: Replace<UserData, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.data = { ...data, createdAt: data.createdAt ?? new Date() };
  }

  public get id() {
    return this._id;
  }

  public get firstName(): string {
    return this.data.firstName;
  }
  public set firstName(value: string) {
    this.data.firstName = value;
  }
  public get lastName(): string {
    return this.data.lastName;
  }
  public set lastName(value: string) {
    this.data.lastName = value;
  }
  public get userName(): Username {
    return this.data.userName;
  }
  public set userName(value: Username) {
    this.data.userName = value;
  }
  public get email(): Email {
    return this.data.email;
  }
  public set email(value: Email) {
    this.data.email = value;
  }
  public get password(): Password {
    return this.data.password;
  }
  public set password(value: Password) {
    this.data.password = value;
  }

  public get createdAt(): Date {
    return this.data.createdAt;
  }
  public get updatedAt(): Date | null | undefined {
    return this.data.updatedAt;
  }
  public get deletedAt(): Date | null | undefined {
    return this.data.deletedAt;
  }
  public update() {
    this.data.updatedAt = new Date();
  }
  public delete() {
    this.data.deletedAt = new Date();
  }
}
