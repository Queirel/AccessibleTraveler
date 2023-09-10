import { PlaceEntity } from '../../places/entities/place.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'images-places' })
// extends BaseEntity implements IUser
export class ImagePlaceEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image: string;

  // @Column()
  // place_id: string;

  @ManyToOne(() => PlaceEntity, (place) => place.img_plc)
  place: PlaceEntity;
}
