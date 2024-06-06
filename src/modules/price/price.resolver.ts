import { Query, Resolver } from '@nestjs/graphql'

import { PriceService } from './price.service'
import { PriceSchema } from './price.schema'

@Resolver()
export class PriceResolver {
	constructor(private readonly _priceService: PriceService) {}

	@Query(() => PriceSchema)
	price() {
		const response = this._priceService.GetAllPrice()
		return response
	}
}
