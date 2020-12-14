export class PostEntity {
  constructor(
    private readonly _id: string,
    private readonly _title: string,
    private readonly _body: string,
    private readonly _createdAt: Date,
    private readonly _updatedAt: Date,
  ) {}

  public get id(): string {
    return this._id ?? null;
  }

  public get title(): string {
    return this._title ?? null;
  }

  public get body(): string {
    return this._body ?? null;
  }

  public get createdAt(): Date {
    return this._createdAt ?? null;
  }

  public get updatedAt(): Date {
    return this._updatedAt ?? null;
  }
}
