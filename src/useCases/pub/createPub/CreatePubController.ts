// import { Geolocation } from "@models/geolocation";
// import { Pub as PubModel } from "@models/pub";
import { Request, Response } from "express";
import { CreatePubUseCase } from "./CreatePubUseCase";

export class CreatePubController {
  constructor(private createPubUseCase: CreatePubUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, cnpj, phone, geolocation } = request.body;

    try {
      await this.createPubUseCase.execute({
        name,
        cnpj,
        phone,
        geolocation,
      });

      return response.sendStatus(201);
    } catch (err) {
      return response.sendStatus(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }
}
