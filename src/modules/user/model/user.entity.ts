import { PostEntity } from 'src/modules/post/model/post.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToMany,
  OneToOne,
  DeleteDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('Users')
export class UserEntity {
  @PrimaryColumn('uuid', { default: uuidv4() })
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  zalo: string;

  @Column({ nullable: true })
  file: string;

  @Column()
  avatar: string;

  @Column({ nullable: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @OneToOne(() => PostEntity, (post: PostEntity) => post.user)
  posts: PostEntity[];
}
