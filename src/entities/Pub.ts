import { v4 } from "uuid";
import { Geolocation } from "./Geolocation";
import { Shared } from "./Shared";

class Pub extends Shared {
  public readonly id!: string;
  public name!: string;
  public cnpj?: string;
  public phone?: string;
  public geolocation!: Geolocation;

  constructor(props: Omit<Pub, "id">, id?: string) {
    super();
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}

export { Pub };
