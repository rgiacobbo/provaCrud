
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
  HttpStatus
} from '@nestjs/common';
import { ViagemService } from './viagem.service';
import { ViagemDto } from './viagem.dto';

@Controller('viagem')
export class ViagemController {
constructor(private viagemService: ViagemService) {}

@Post()
async create(@Body() viagemDto: ViagemDto ) {
  try{
      const viagem = await this.viagemService.create(viagemDto)
   if (!viagem) {
        throw new BadRequestException();
      }
      return viagem;
    } catch (error) {
      throw new BadRequestException('Erro ao buscar id viagem');
    }
}

@Get()
 findAll() {
  return this.viagemService.findAll();
} 

@Get(':id')
async findOne(@Param('id') id: number) {
  try{
      const viagem = await this.viagemService.findOne(id);
   if (!viagem) {
        throw new NotFoundException();
      }
      return viagem;
    } catch (error) {
      throw new NotFoundException('Erro ao buscar id viagem');
    }
}

@Put(':id')
async update(@Param('id') id: number, @Body() viagemDto: ViagemDto) {
  
  try{
      const viagem = await this.viagemService.update(id, viagemDto);
   if (!viagem) {
        throw new NotFoundException();
      }
      return viagem;
    } catch (error) {
      throw new NotFoundException('Erro ao buscar id viagem');
    }
}

@Delete(':id')
async remove(@Param('id') id: number) {
  try{
      const viagem = await this.viagemService.remove(id);
   if (!viagem) {
        throw new NotFoundException();
      }
      return HttpStatus.NO_CONTENT;
    } catch (error) {
      throw new NotFoundException('Erro ao buscar id viagem');
    }
}
}