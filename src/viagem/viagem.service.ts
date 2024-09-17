import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ViagemEntity } from 'src/db/entity/viagem';
import { DeleteResult, Repository } from 'typeorm';
import { ViagemDto } from './viagem.dto';


@Injectable()
export class ViagemService {
  constructor(
    @InjectRepository(ViagemEntity)
    private viagemRepository: Repository<ViagemEntity>,
  ) {}

  async findAll(): Promise<ViagemEntity[]> {
    const viagem = await this.viagemRepository.find();
    for (const n of viagem) {
      console.log(n.destinos)
    }

    return viagem;
  }

  

  async create(viagemDto: ViagemDto) {
    console.log(viagemDto)
    const viagem = await this.viagemRepository.save(viagemDto);
    return viagem;
  }

  async update(id: number, viagemDto: ViagemDto) {
    return await this.viagemRepository.update(id, viagemDto);
  }

  findOne(id: number): Promise<ViagemEntity | null> {
    const n = this.viagemRepository.findOneBy({ id });
    if(!n){
        throw new NotFoundException(id);
    }else {
        return n;
    }
  }

  async remove(id: number): Promise<ViagemEntity | null> {
    const n = this.viagemRepository.findOneBy({ id });
    if(!n){
        return n;
    }else {
         await this.viagemRepository.delete(id);
    }
  }
}