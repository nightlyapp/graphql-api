import { Pub } from "@root/entities/Pub";

export interface IPubRepository {
  save(pub: Pub): Promise<void>;
}
