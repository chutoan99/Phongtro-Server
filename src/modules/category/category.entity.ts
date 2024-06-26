import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'

@Entity('Categories')
export class CategoryEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	code: string

	@Column()
	value: string

	@Column()
	header: string

	@Column()
	subHeader: string

	@Column()
	path: string

	@Column({ nullable: true })
	isActive: boolean

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@DeleteDateColumn()
	deleteAt: Date
}
