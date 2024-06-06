import { Query, Resolver } from '@nestjs/graphql'
import { AreaService } from './area.service'
import { AreaSchema } from './area.schema'

@Resolver()
export class AreaResolver {
	constructor(private readonly _areaService: AreaService) {}

	@Query(() => AreaSchema)
	area() {
		const response = this._areaService.GetAllArea()
		return response
	}
}
