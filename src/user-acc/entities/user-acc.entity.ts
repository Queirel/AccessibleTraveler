import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UsersEntity } from '../../users/entities/user.entity';
import { AccessibilityEntity } from '../../accessibility/entities/accessibility.entity';

@Entity({ name: 'user_accessibility' })
export class UsersAccessibilityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Relación muchos-a-uno con User
  @ManyToOne(() => UsersEntity, (user) => user.accessibilityIncludes)
  user: UsersEntity;

  // Relación muchos-a-uno con Accessibility
  @ManyToOne(
    () => AccessibilityEntity,
    (accessibility) => accessibility.usersIncludes,
  )
  accessibility: AccessibilityEntity;
}
