import { PlaceEntity } from '../../places/entities/place.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
// extends BaseEntity implements IUser
export class CategoriesEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ unique: true, nullable: true })
  image: string;

  // @OneToMany(() => PlaceEntity, (place) => place.city)
  // place: PlaceEntity[];
}
