import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  firstName: string;

  @Column({ type: 'varchar', nullable: false })
  lastName: string;

  @Column({ type: 'date', nullable: true })
  dateOfBirth!: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({
    type: 'enum',
    enum: ['customer', 'agent', 'vendor', 'admin', 'super admin'],
    default: 'customer',
  })
  role: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  phoneNumber: string;

  @Column()
  password: string;

  @Column({ type: 'varchar', nullable: true })
  accessToken: string;

  @Column({ type: 'varchar', nullable: true })
  image: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @Column({ type: 'varchar', nullable: true })
  houseNumber: string;

  @Column({ type: 'varchar', nullable: true })
  city: string;

  @Column({ type: 'varchar', nullable: true })
  state: string;

  @Column({ type: 'varchar', nullable: true })
  country: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  ninNumber: string;

  @Column({ type: 'boolean', default: false })
  activated: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date;
}
