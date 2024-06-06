import { Query, Resolver } from '@nestjs/graphql';

import { CategoryService } from './category.service';
import { CategoryResponse } from './categoryResponse.schema';

@Resolver()
export class CategoryResolver {
  constructor(private readonly _categoryService: CategoryService) {}

  @Query(() => CategoryResponse)
  category() {
    const response = this._categoryService.GetAllCategory();
    return response;
  }
}
