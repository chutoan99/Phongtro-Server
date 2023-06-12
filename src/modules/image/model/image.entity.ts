import { PostEntity } from 'src/modules/post/model/post.entity';
import {
  Entity,
  Column,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';
@Entity('Images')
export class ImageEntity {
  @PrimaryColumn('uuid', { default: uuidv4() })
  id: number;

  @Column('text')
  image: string;

  @Column({ nullable: true })
  postImg: string;

  @Column()
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => PostEntity, (post) => post.images)
  post: PostEntity;
}
