import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { PostEntity } from '../post/post.entity';
import { v4 as uuidv4 } from 'uuid';
@Entity('Users')
export class UserEntity {
  @PrimaryColumn('uuid', { default: uuidv4() })
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  zalo: string;

  @Column({ nullable: true })
  file: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @OneToMany(() => PostEntity, (post) => post.user)
  // posts: PostEntity[];
}
