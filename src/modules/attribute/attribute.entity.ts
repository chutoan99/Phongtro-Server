import { PostEntity } from 'src/modules/post/post.entity'
import { Entity, Column, PrimaryColumn, OneToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'

import { v4 as uuidv4 } from 'uuid'

@Entity('Attributes')
export class AttributeEntity {
	@PrimaryColumn('uuid', { default: uuidv4() })
	id: string

	@Column()
	price: string

	@Column()
	acreage: string

	@Column()
	published: string

	@Column()
	hashtag: string

	@Column({ nullable: true })
	isActive: boolean

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@DeleteDateColumn()
	deleteAt: Date

	@OneToOne(() => PostEntity, (post: PostEntity) => post.attributes)
	post: PostEntity
}
