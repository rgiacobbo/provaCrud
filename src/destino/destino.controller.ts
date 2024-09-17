import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';import { DestinoService } from './destino.service';
import { DestinoDto } from './destino.dto';

@Controller('destino')
export class DestinoController {
  constructor(private destinoService: DestinoService) {}

  @Get()
  findAll() {
   return this.destinoService.findAll();
 } 

 
  @Post()
  async create(@Body() destinoDto: DestinoDto ) {
    try{
        const viagem = await this.destinoService.create(destinoDto)
     if (!viagem) {
          throw new BadRequestException();
        }
        return viagem;
      } catch (error) {
        throw new BadRequestException('Erro ao buscar id destino');
      }
  }

  @Get(':id')
async findOne(@Param('id') id: number) {
  try{
      const viagem = await this.destinoService.findOne(id);
   if (!viagem) {
        throw new NotFoundException();
      }
      return viagem;
    } catch (error) {
      throw new NotFoundException('Erro ao buscar id destino');
    }
}

@Delete(':id')
async remove(@Param('id') id: number) {
  try{
      const viagem = await this.destinoService.remove(id);
   if (!viagem) {
        throw new NotFoundException();
      }
      return 'OK';
    } catch (error) {
      throw new NotFoundException('Erro ao buscar id destino');
    }
}
}
