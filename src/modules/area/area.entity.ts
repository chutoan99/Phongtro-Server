import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'

@Entity('Areas')
export class AreaEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	order: number

	@Column()
	code: string

	@Column()
	value: string

	@Column({ nullable: true })
	isActive: boolean

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@DeleteDateColumn()
	deleteAt: Date
}
