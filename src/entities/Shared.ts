class Shared {
  public readonly createdAt: number;
  public updatedAt: number;
  public deletedAt: number;

  constructor() {
    this.createdAt = Date.now();
    this.updatedAt = 0;
    this.deletedAt = 0;
  }
}
