import { randomUUID } from 'node:crypto';
import { Replace } from '@helpers/replace';

export interface PermissionData {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt?: Date | null;
}
export class Permission {
  private _id: string;
  private data: PermissionData;

  constructor(
    data: Replace<PermissionData, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.data = { ...data, createdAt: data.createdAt ?? new Date() };
  }

  public get id() {
    return this._id;
  }

  public get name(): string {
    return this.data.name;
  }
  public set name(value: string) {
    this.data.name = value;
  }
  public get description(): string {
    return this.data.description;
  }
  public set description(value: string) {
    this.data.description = value;
  }

  public get createdAt(): Date {
    return this.data.createdAt;
  }
  public get updatedAt(): Date | null | undefined {
    return this.data.updatedAt;
  }
  public update() {
    this.data.updatedAt = new Date();
  }
}
