import { Injectable } from "@graphql-modules/di";
import { Pub } from "#root/db/models/pub";
import { Geolocation } from "#root/db/models/geolocation";

@Injectable()
export class PubProvider {
  getPubById(id: number) {
    return Pub.findOne({ where: { id }, include: [Geolocation] });
  }
  getPubs() {
    return Pub.findAll({
      include: [Geolocation],
    });
  }
}
