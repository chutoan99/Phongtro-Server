import { Query, Resolver } from '@nestjs/graphql'
import { AreaService } from './area.service'
import { AreaResponse } from './area.schema'

@Resolver()
export class AreaResolver {
	constructor(private readonly _areaService: AreaService) {}

	@Query(() => AreaResponse)
	area() {
		const response = this._areaService.GetAllArea()
		return response
	}
}
