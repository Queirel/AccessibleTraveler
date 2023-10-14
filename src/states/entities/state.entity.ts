import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CountryEntity } from '../../country/entities/country.entity';
import { CitiesEntity } from '../../cities/entities/city.entity';

@Entity({ name: 'states' })
// extends BaseEntity implements IUser
export class StateEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ unique: true, nullable: true  })
  icon: string;

  @ManyToOne(() => CountryEntity, (country) => country.states)
  country: CountryEntity;

  @OneToMany(() => CitiesEntity, (city) => city.state)
  city: CitiesEntity[];
}
