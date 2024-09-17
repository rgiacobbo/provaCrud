import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DestinoEntity } from 'src/db/entity/destino';
import { Repository } from 'typeorm';
import { DestinoDto } from './destino.dto';

@Injectable()
export class DestinoService {
    constructor(
        @InjectRepository(DestinoEntity)
        private destinoRepository: Repository<DestinoEntity>,
      ) {}

      async create(destinoDto: DestinoDto) {
        const viagem = await this.destinoRepository.save(destinoDto);
        return viagem;
      }


      findOne(id: number): Promise<DestinoEntity | null> {
        const n = this.destinoRepository.findOneBy({ id });
        if(!n){
            throw new NotFoundException(id);
        }else {
            return n;
        }
      }

      async remove(id: number): Promise<DestinoEntity | null> {
        const n = this.destinoRepository.findOneBy({ id });
        if(!n){
            return n;
        }else {
             await this.destinoRepository.delete(id);
        }
      }
}
