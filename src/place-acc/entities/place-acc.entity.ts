import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AccessibilityEntity } from '../../accessibility/entities/accessibility.entity';
import { PlaceEntity } from '../../places/entities/place.entity';

@Entity({ name: 'place_accessibility' })
export class PlacesAccessibilityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Relación muchos-a-uno con User
  @ManyToOne(() => PlaceEntity, (place) => place.accessibilityIncludes)
  place: PlaceEntity;

  // Relación muchos-a-uno con Accessibility
  @ManyToOne(
    () => AccessibilityEntity,
        (accessibility) => accessibility.placesIncludes,
  )
  accessibility: AccessibilityEntity;
}
