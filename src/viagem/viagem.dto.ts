import { DestinoEntity } from "src/db/entity/destino";

export class ViagemDto {
    nome: string;
    dataSaida: string;
    dataChegada: string;
    valor: number;
    destinos: DestinoEntity[];
  }