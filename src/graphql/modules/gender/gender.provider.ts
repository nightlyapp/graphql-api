import { Injectable } from "@graphql-modules/di";
import { Pub } from "@models/pub";
import { Gender } from "@models/gender";

@Injectable()
export class GenderProvider {
  // QUERYS
  getGenderById(id: any) {
    return Gender.findOne({ where: { id }, include: [Pub] });
  }

  getGenders() {
    return Gender.findAll({
      include: [Pub],
    });
  }

  // MUTATIONS
  createGender(name: string) {
    return Gender.create({ name });
  }
}
