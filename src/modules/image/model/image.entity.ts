import { PostEntity } from 'src/modules/post/model/post.entity';
import {
  Entity,
  Column,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  DeleteDateColumn,
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';
@Entity('Images')
export class ImageEntity {
  @PrimaryColumn('uuid', { default: uuidv4() })
  id: string;

  @Column('text')
  image: string;

  @Column({ nullable: true })
  postImg: string;

  @Column()
  total: number;

  @Column({ nullable: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @OneToOne(() => PostEntity, (post: PostEntity) => post.images)
  post: PostEntity;
}
