import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('cars')
export class Car {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
  id: string;

  @Column({ name: 'license_plate' })
  licensePlate: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  version: string;

  @Column({ name: 'manufactured_year' })
  manufacturedYear: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
