import { GenderProvider } from "./gender.provider";

export default {
  Query: {
    gender: (_: any, { id }: any, { injector }: any) =>
      injector.get(GenderProvider).getGenderById(id),
    genders: (_: any, __: any, { injector }: any) =>
      injector.get(GenderProvider).getGenders(),
  },
  Mutation: {
    createGender: (_any: any, { name }: any, { injector }: any) =>
      injector.get(GenderProvider).createGender(name),
  },
};
