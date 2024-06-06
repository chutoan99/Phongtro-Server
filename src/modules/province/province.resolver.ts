import { Query, Resolver } from '@nestjs/graphql'

import { ProvinceService } from './province.service'
import { ProvinceSchema } from './province.schema'

@Resolver()
export class ProvinceResolver {
	constructor(private readonly _provinceService: ProvinceService) {}

	@Query(() => ProvinceSchema)
	province() {
		const response = this._provinceService.GetAllProvince()
		return response
	}
}
