import { Pub } from "#root/db/models/pub";
import { Geolocation } from "#root/db/models/geolocation";

const Query = {
  geolocation: (pub: Pub) => {
    return Geolocation.findAll({
      include: [
        {
          model: Pub,
          where: { id: pub.id },
        },
      ],
      order: [["name", "ASC"]],
    });
  },
};

export default Query;
