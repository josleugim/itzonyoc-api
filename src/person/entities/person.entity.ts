import {
  AfterInsert,
  AfterLoad,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('persons')
export class Person {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, length: 255 })
  name: string;

  @Column({ nullable: false, length: 255, name: 'first_name' })
  firstName: string;

  @Column({ nullable: true, length: 255, name: 'last_name' })
  lastName: string;

  @Column({ nullable: false, length: 255 })
  rfc: string;

  @Column({ nullable: false, length: 255 })
  curp: string;

  @Column({ nullable: true })
  birthday: string;

  @Column({
    nullable: false,
    type: 'timestamp',
    name: 'registration_date',
    default: 'now()',
  })
  registrationDate: string;

  @Column({
    nullable: false,
    default: true,
    type: 'boolean',
    name: 'status_id',
  })
  statusId: boolean;

  @Column({ nullable: true, name: 'gender_id' })
  genderId: string;

  @Column({ nullable: false, name: 'type_id' })
  typeId: string;

  @Column({ nullable: true, type: 'timestamp', name: 'updated_at' })
  updatedAt: string;

  @Column({ nullable: true, length: 2048 })
  avatar: string;

  protected avatarUrl: string;

  @AfterLoad()
  @AfterInsert()
  @AfterUpdate()
  avatarVirtual() {
    this.avatarUrl = `http://localhost:3000/files/${this.avatar}`;
  }
}
