import { uuid } from "uuidv4";

class Pub extends Shared {
  public readonly id!: string;
  public name!: string;
  public cnpj?: string;
  public phone?: string;

  constructor(props: Omit<Pub, "id">, id?: string) {
    super();
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}

export { Pub };
