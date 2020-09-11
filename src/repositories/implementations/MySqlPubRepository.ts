import { Geolocation } from "@root/db/models/geolocation";
import { Pub } from "@root/entities/Pub";
import { Pub as PubModel } from "@root/db/models/pub";
import { IPubRepository } from "../interfaces/IPubRepository";

export class MySqlPubRepository implements IPubRepository {
  save(pub: Pub): Promise<void> {

    return PubModel.create(pub, { include: [Geolocation] })
      .then(() => {})
      .catch((error) => console.error(error));
  }
}
