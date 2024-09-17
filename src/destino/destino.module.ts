import { Module } from '@nestjs/common';
import { DestinoController } from './destino.controller';
import { DestinoService } from './destino.service';

@Module({
  controllers: [DestinoController],
  providers: [DestinoService]
})
export class DestinoModule {}
