import { CitiesEntity } from '../../cities/entities/city.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'recommended' })
// extends BaseEntity implements IUser
export class RecommendedEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  place: string;
  
  @Column({ nullable: true })
  image: string;

  // @Column()
  // city_id: string;

//   @OneToOne(() => CitiesEntity, (city) => city.recommended)
//   @JoinColumn({ name: 'city_id' })
//   city: CitiesEntity;
}
