import { StudentHouse } from 'src/models/studentHouse';
import { Column, Entity, OneToMany } from 'typeorm';
import { DocumentSchema } from '../common/document';

import { VARCHAR_50 } from '../common/typeExtensiones';
import { PackageSchema } from '../package/package.schema';

@Entity({ name: 'student_house' })
export class StudentHouseSchema extends DocumentSchema implements StudentHouse {
  @Column(VARCHAR_50.type, {
    name: 'name',
    nullable: VARCHAR_50.nullable,
    length: VARCHAR_50.max,
    default: VARCHAR_50.default,
  })
  name: string;

  @OneToMany(() => PackageSchema, (packages) => packages.studentHouse)
  packages: PackageSchema[];
}
