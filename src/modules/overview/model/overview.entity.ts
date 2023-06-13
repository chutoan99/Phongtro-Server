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

@Entity('Overviews')
export class OverviewEntity {
  @PrimaryColumn('uuid', { default: uuidv4() })
  id: string;

  @Column()
  code: string;

  @Column()
  area: string;

  @Column()
  type: string;

  @Column()
  target: string;

  @Column()
  created: string;

  @Column()
  expired: string;

  @Column()
  bonus: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => PostEntity, (post: PostEntity) => post.overviews)
  post: PostEntity;
}
