import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}