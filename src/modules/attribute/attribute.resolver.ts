import { Query, Resolver } from '@nestjs/graphql'

import { AttributeService } from './attribute.service'
import { AttributeSchema } from './attribute.schema'

@Resolver()
export class AttributeResolver {
	constructor(private readonly _attributeService: AttributeService) {}

	@Query(() => AttributeSchema)
	attribute() {
		const response = this._attributeService.getAllAttribute()
		return response
	}
}
