import { ViagemEntity } from 'src/db/entity/viagem';
import { Repository } from 'typeorm';
import { ViagemDto } from './viagem.dto';
export declare class ViagemService {
    private viagemRepository;
    constructor(viagemRepository: Repository<ViagemEntity>);
    findAll(): Promise<ViagemEntity[]>;
    create(viagemDto: ViagemDto): Promise<ViagemDto & ViagemEntity>;
    update(id: number, viagemDto: ViagemDto): Promise<import("typeorm").UpdateResult>;
    findOne(id: number): Promise<ViagemEntity | null>;
    remove(id: number): Promise<ViagemEntity | null>;
}
