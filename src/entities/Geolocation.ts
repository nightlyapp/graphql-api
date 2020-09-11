import { v4 } from "uuid";
import { Shared } from "./Shared";

class Geolocation extends Shared {
  public readonly id!: string;
  public address!: string;
  public cep!: string;
  public latitude!: number;
  public longitude!: number;

  constructor(props: Omit<Geolocation, "id">, id?: string) {
    super();
    Object.assign(this, props);

    if (!id) {
      this.id = v4();
    }
  }
}

export { Geolocation };
