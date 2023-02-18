import { type } from 'os';
import { PackageTypeEnum } from '../../models/packageType.enum';
import { StudentHouse } from '../../models/studentHouse';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Package } from '../../models/package';
import { INT_1_M, INT_999, VARCHAR_50, VARCHAR_6 } from '../common/typeExtensiones';
import { StudentHouseSchema } from '../studentHouse/studentHouse.schema';
import { DocumentSchema } from '../common/document';

@Entity({ name: 'packages' })
export class PackageSchema extends DocumentSchema implements Package {
  @ManyToOne(() => StudentHouseSchema, (studentHouse) => studentHouse.packages)
  studentHouse: StudentHouseSchema;

  @Column(INT_1_M.type, {
    nullable: INT_1_M.nullable,
    name: 'number',
    default: INT_1_M.default,
    precision: INT_1_M.precision,
    scale: INT_1_M.scale,
    transformer: INT_1_M.transformer,
  })
  number: number;

  @Column(INT_999.type, {
    nullable: INT_999.nullable,
    name: 'quantity',
    default: INT_999.default,
    precision: INT_999.precision,
    scale: INT_999.scale,
    transformer: INT_999.transformer,
  })
  quantity: number;

  @Column('enum', {
    nullable: false,
    enum: PackageTypeEnum,
    name: 'type',
    default: PackageTypeEnum.PACZKA,
  })
  type: PackageTypeEnum;

  @Column('timestamptz', {
    name: 'delivery_date',
    nullable: false,
  })
  deliveryDate: Date;

  @Column(VARCHAR_50.type, {
    name: 'receiver_first_name',
    nullable: VARCHAR_50.nullable,
    length: VARCHAR_50.max,
    default: VARCHAR_50.default,
  })
  recieverFirstName: string;

  @Column(VARCHAR_50.type, {
    name: 'receiver_last_name',
    nullable: VARCHAR_50.nullable,
    length: VARCHAR_50.max,
    default: VARCHAR_50.default,
  })
  recieverLastName: string;

  @Column(VARCHAR_6.type, {
    name: 'receiver_first_name',
    nullable: true,
    length: VARCHAR_6.max,
    default: VARCHAR_6.default,
  })
  reciverRoom: string;

  @Column('boolean', {
    nullable: false,
    name: 'recived',
    default: false,
  })
  recived: boolean;

  @Column('timestamptz', {
    name: 'recived_date',
    nullable: false,
  })
  recivedDate: Date;
}
