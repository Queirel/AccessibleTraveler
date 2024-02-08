import { UsersEntity } from '../../users/entities/user.entity';
import { PlaceEntity } from '../../places/entities/place.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'comments' })
// extends BaseEntity implements IUser
export class CommentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  rate: number;

  @Column()
  comment: string;

  @Column()
  user_id: string;

  @Column()
  place_id: string;

  @ManyToOne(() => PlaceEntity, (place) => place.comment)
  @JoinColumn({ name: 'placeid' })
  place: PlaceEntity;

  @ManyToOne(() => UsersEntity, (user) => user.comment)
  @JoinColumn({ name: 'userid' })
  user: UsersEntity;
}
