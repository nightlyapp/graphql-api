import { Injectable } from "@graphql-modules/di";
import { Pub } from "@models/pub";
import { Geolocation } from "@models/geolocation";

@Injectable()
export class GeolocationProvider {
  getGeolocationById(id: any) {
    return Geolocation.findOne({ where: { id }, include: [Pub] });
  }
  getGeolocations() {
    return Geolocation.findAll({
      include: [Pub],
    });
  }
}
