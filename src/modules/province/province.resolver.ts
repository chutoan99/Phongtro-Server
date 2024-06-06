import { Query, Resolver } from '@nestjs/graphql'

import { ProvinceService } from './province.service'
import { ProvinceResponse } from './provinceResponse.schema'

@Resolver()
export class ProvinceResolver {
	constructor(private readonly _provinceService: ProvinceService) {}

	@Query(() => ProvinceResponse)
	province() {
		const response = this._provinceService.GetAllProvince()
		return response
	}
}
