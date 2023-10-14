import { RecommendedEntity } from '../../recommended/entities/recommended.entity';
import { PlaceEntity } from '../../places/entities/place.entity';
import { StateEntity } from '../../states/entities/state.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'cities' })
// extends BaseEntity implements IUser
export class CitiesEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  // @Column()
  // state_id: string;
  // @OneToMany(() => PlaceEntity, (place) => place.city)
  // place: PlaceEntity[];

  @ManyToOne(() => StateEntity, (state) => state.city)
  state: StateEntity;

  // @OneToOne(() => RecommendedEntity, (recommended) => recommended.city)
  // recommended: RecommendedEntity;
}
