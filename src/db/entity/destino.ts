import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DestinoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destino: string;


}