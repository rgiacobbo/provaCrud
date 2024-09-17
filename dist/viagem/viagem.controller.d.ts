import { ViagemService } from './viagem.service';
import { ViagemDto } from './viagem.dto';
export declare class ViagemController {
    private viagemService;
    constructor(viagemService: ViagemService);
    create(viagemDto: ViagemDto): Promise<ViagemDto & import("../db/entity/viagem").ViagemEntity>;
    findAll(): Promise<import("../db/entity/viagem").ViagemEntity[]>;
    findOne(id: number): Promise<import("../db/entity/viagem").ViagemEntity>;
    update(id: number, viagemDto: ViagemDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<string>;
}
