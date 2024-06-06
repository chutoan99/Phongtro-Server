import { Injectable } from '@nestjs/common'
import { AttributeEntity } from './attribute.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AttributeService {
	constructor(
		@InjectRepository(AttributeEntity)
		private readonly _attributeRepository: Repository<AttributeEntity>
	) {}
	async getAllAttribute() {
		const response = await this._attributeRepository.find({
			where: { isActive: true }
		})
		return {
			err: response ? 0 : 1,
			msg: response ? 'OK' : 'Failed to get attribute.',
			response
		}
	}
}
