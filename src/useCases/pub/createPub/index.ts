import { CreatePubController } from "./CreatePubController";
import { CreatePubUseCase } from "./CreatePubUseCase";
import { MySqlPubRepository } from "../../../repositories/implementations/MySqlPubRepository";

const mySqlPubRepository = new MySqlPubRepository();

const createPubUseCase = new CreatePubUseCase(mySqlPubRepository);
const createPubController = new CreatePubController(createPubUseCase);

export { createPubController };
