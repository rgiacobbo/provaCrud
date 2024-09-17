import { Module } from '@nestjs/common';
import { DestinoController } from './destino.controller';
import { DestinoService } from './destino.service';
import { DestinoEntity } from 'src/db/entity/destino';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DestinoEntity])],
  controllers: [DestinoController],
  providers: [DestinoService]
})
export class DestinoModule {}
