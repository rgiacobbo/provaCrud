import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DestinoEntity } from './destino';

@Entity()
export class ViagemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column("date")
  dataSaida: string;

  @Column("date")
  dataChegada: string;

  @Column()
  valor: number;

  @OneToMany(() => DestinoEntity, destino => destino.viagem)
  destinos: DestinoEntity[];
}