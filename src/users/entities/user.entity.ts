import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { UsersAccessibilityEntity } from '../../user-acc/entities/user-acc.entity';
import { CountryEntity } from '../../country/entities/country.entity';
import { CommentsEntity } from '../../comments/entities/comment.entity';

@Entity({ name: 'users' })
// extends BaseEntity implements IUser
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  image: string;

  @Exclude()
  @Column()
  password: string;

  @OneToMany(
    () => UsersAccessibilityEntity,
    (usersAccessibility) => usersAccessibility.user,
  )
  accessibilityIncludes: UsersAccessibilityEntity[];

  @ManyToOne(() => CountryEntity, (country) => country.user)
  country: CountryEntity;

//   @OneToOne(() => CommentsEntity, (comment) => comment.user)
//   comment: CommentsEntity;
}
