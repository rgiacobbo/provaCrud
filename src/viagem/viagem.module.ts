import { Module } from '@nestjs/common';
import { ViagemController } from './viagem.controller';
import { ViagemService } from './viagem.service';
import { ViagemEntity } from 'src/db/entity/viagem';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ViagemEntity])],
  controllers: [ViagemController],
  providers: [ViagemService]
})
export class ViagemModule {}
