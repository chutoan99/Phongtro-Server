import {
  Entity,
  Column,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { PostEntity } from '../post/post.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity('Overviews')
export class OverviewEntity {
  @PrimaryColumn('uuid', { default: uuidv4() })
  id: number;

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

  @OneToOne(() => PostEntity, (post) => post.overviews)
  post: PostEntity;
}
