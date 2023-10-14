import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersAccessibilityEntity } from '../../user-acc/entities/user-acc.entity';
import { PlacesAccessibilityEntity } from '../../place-acc/entities/place-acc.entity';

@Entity({ name: 'accessibility' })
// extends BaseEntity implements IUser
export class AccessibilityEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  icon: string;

  @OneToMany(
    () => UsersAccessibilityEntity,
    (usersAccessibility) => usersAccessibility.accessibility,
  )
  usersIncludes: UsersAccessibilityEntity[];

  @OneToMany(
    () => PlacesAccessibilityEntity,
    (placesAccessibility) => placesAccessibility.accessibility,
  )
  placesIncludes: PlacesAccessibilityEntity[];
}
