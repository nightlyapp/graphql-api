import { Pub } from "#root/db/models/pub";

const pubResolver = () => {
  return Pub.findAll();
};

export default pubResolver;
