import { Geolocation } from "@root/entities/Geolocation";

export interface ICreatePubDTO {
  name: string;
  cnpj?: string;
  phone?: string;
  geolocation: Geolocation;
}
