import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { Post } from './post.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  zalo: string;

  @Column()
  file: string;

  @Column()
  avatar: string;

  // @OneToMany(() => Post, (post) => post.user)
  // posts: Post[];
}
