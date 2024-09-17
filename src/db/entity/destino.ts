import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ViagemEntity } from './viagem';

@Entity()
export class DestinoEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  destino: string;

  @ManyToOne(() => ViagemEntity, viagem => viagem.destinos)
  viagem: ViagemEntity;

}