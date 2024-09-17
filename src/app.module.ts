import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViagemModule } from './viagem/viagem.module';
import { ViagemEntity } from './db/entity/viagem';
import { DestinoModule } from './destino/destino.module';
import { DestinoEntity } from './db/entity/destino';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'crud',
      entities: [ViagemEntity, DestinoEntity],
      synchronize: true,
    }),
    ViagemModule,
    DestinoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}