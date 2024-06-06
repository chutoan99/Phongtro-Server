import { Query, Resolver } from '@nestjs/graphql'

import { CategoryService } from './category.service'
import { CategorySchema } from './category.schema'

@Resolver()
export class CategoryResolver {
	constructor(private readonly _categoryService: CategoryService) {}

	@Query(() => CategorySchema)
	category() {
		const response = this._categoryService.GetAllCategory()
		return response
	}
}
