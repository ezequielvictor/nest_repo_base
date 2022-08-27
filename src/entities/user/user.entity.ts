import { BaseEntity } from '@commonEntities/base-entity';
import * as bcrypt from 'bcryptjs';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import { IUser } from './user.interface';

@Entity('user')
export class UserEntity extends BaseEntity<UserEntity> implements IUser {
  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      return (this.password = bcrypt.hashSync(this.password, 8));
    }
  }

  checkIfPasswordIsValid(password: string) {
    return bcrypt.compareSync(password, this.password);
  }
}
