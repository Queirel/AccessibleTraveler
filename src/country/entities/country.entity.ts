import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { StateEntity } from '../../states/entities/state.entity';
import { UsersEntity } from '../../users/entities/user.entity';

@Entity({ name: 'country' })
// extends BaseEntity implements IUser
export class CountryEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true, nullable: true })
  image: string;

  @OneToMany(() => StateEntity, (state) => state.country)
  states: StateEntity[];

  @OneToMany(() => UsersEntity, (user) => user.country)
  user: UsersEntity[];
}
