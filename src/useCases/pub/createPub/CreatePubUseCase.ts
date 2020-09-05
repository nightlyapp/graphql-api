import { CreatePubController } from "./CreatePubController";
import { CreatePubDTO } from "./CreatePubDTO";

export class CreatePubUseCase {
  constructor(private createPubController: CreatePubController) {}

  execute(pub: CreatePubDTO) {
    this.createPubController.execute(pub);
  }
}
