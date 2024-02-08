// import { CitiesEntity } from '../../cities/entities/city.entity';

import { PlaceEntity } from 'src/places/entities/place.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'recommended' })
// extends BaseEntity implements IUser
export class RecommendedEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column()
  // name: string;

  // @Column()
  // place: string;

  // @Column({ nullable: true })
  // image: string;

  // @Column()
  // city_id: string;
  // @OneToMany(() => PlaceEntity, (place) => place.recommended)
  // @JoinColumn({ name: 'place_id' })
  // place: PlaceEntity;

  @OneToOne(() => PlaceEntity, (place) => place.recommended)
  @JoinColumn({ name: 'placeid' })
  place: PlaceEntity;

  // @OneToOne(() => PlaceEntity, (place) => place.recommended)
  // @JoinColumn({ name: 'place_id' })
  // city: PlaceEntity;
}
