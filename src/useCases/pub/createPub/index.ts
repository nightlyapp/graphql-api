import { CreatePubController } from "./CreatePubController";
import { CreatePubUseCase } from "./CreatePubUseCase";

const pubController = new CreatePubController();

const teste = new CreatePubUseCase(pubController);
