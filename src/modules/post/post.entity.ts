import { AttributeEntity } from 'src/modules/attribute/attribute.entity'
import { ImageEntity } from 'src/modules/image/image.entity'
import { OverviewEntity } from 'src/modules/overview/overview.entity'
import { UserEntity } from 'src/modules/user/user.entity'
import {
	Entity,
	Column,
	OneToOne,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryColumn,
	DeleteDateColumn
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('Posts')
export class PostEntity {
	@PrimaryColumn('uuid', { default: uuidv4() })
	id: string

	@Column()
	title: string | null

	@Column({ nullable: true })
	start: number | null

	@Column()
	labelCode: string

	@Column()
	address: string | null

	@Column()
	attributesId: string

	@Column()
	categoryCode: string

	@Column()
	priceCode: string

	@Column()
	areaCode: string

	@Column()
	provinceCode: string

	@Column('text')
	description: string | null

	@Column('uuid', { default: uuidv4() })
	userId: string

	@Column()
	overviewId: string

	@Column()
	imagesId: string

	@Column('float')
	priceNumber: number

	@Column('float')
	areaNumber: number

	@Column({ nullable: true })
	isActive: boolean

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@DeleteDateColumn()
	deleteAt: Date

	@OneToOne(() => AttributeEntity, (attribute: AttributeEntity) => attribute.post)
	attributes: AttributeEntity

	@OneToOne(() => ImageEntity, (image: ImageEntity) => image.post)
	images: ImageEntity

	@OneToOne(() => OverviewEntity, (overview: OverviewEntity) => overview.post)
	overviews: OverviewEntity

	@ManyToOne(() => UserEntity, (user: UserEntity) => user.posts)
	user: UserEntity
}
