import { Geolocation } from "#root/db/models/geolocation";
import { Pub } from "#root/db/models/pub";
import { Injectable } from "@graphql-modules/di";

@Injectable()
export class PubProvider {
  getPubById(id: any) {
    return Pub.findOne({ where: { id }, include: [Geolocation] });
  }
  getPubs() {
    return Pub.findAll({
      include: [Geolocation],
    });
  }
  createPub(pub: any) {
    return Pub.create(pub, { include: [Geolocation] });
  }
}
