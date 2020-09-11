import { Pub } from "@root/entities/Pub";
import { IPubRepository } from "@root/repositories/interfaces/IPubRepository";
import { ICreatePubDTO } from "./CreatePubDTO";

export class CreatePubUseCase {
  constructor(private pubRepository: IPubRepository) {}

  async execute(data: ICreatePubDTO) {
    // const alreadyCreated = await this.pubRepository.findByName(data.name);
    // if (alreadyCreated) {
    //   throw new Error("Pub already exists");
    // }

    const pub = new Pub(data);
    // console.log('useCase', pub);

    await this.pubRepository.save(pub);
  }
}
