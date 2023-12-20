import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PlacesAccessibilityEntity } from '../../place-acc/entities/place-acc.entity';
import { CitiesEntity } from '../../cities/entities/city.entity';
import { CategoriesEntity } from '../../categories/entities/category.entity';
import { ImagePlaceEntity } from '../../images-places/entities/images-place.entity';
import { CommentsEntity } from '../../comments/entities/comment.entity';

@Entity({ name: 'places' })
// extends BaseEntity implements IUser
export class PlaceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  // @ManyToOne(() => CitiesEntity, (city) => city.place)
  // city: CitiesEntity;

  // @ManyToOne(() => CategoriesEntity, (category) => category.place)
  // category: CategoriesEntity;

  @OneToMany(
    () => PlacesAccessibilityEntity,
    (placesAccessibility) => placesAccessibility.place,
  )
  accessibilityIncludes: PlacesAccessibilityEntity[];

  @OneToMany(() => ImagePlaceEntity, (img_plc) => img_plc.place)
  img_plc: ImagePlaceEntity[];

  // @OneToMany(() => CommentsEntity, (comment) => comment.place)
  // comment: CommentsEntity[];
}
