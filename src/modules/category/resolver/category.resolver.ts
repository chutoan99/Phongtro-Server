import { Query, Resolver } from '@nestjs/graphql';

import { CategoryService } from '../category.service';
import { CategoryResponse } from '../schema/categoryResponse.schema';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => CategoryResponse)
  category() {
    const response = this.categoryService.GetAllCategory();
    return response;
  }
}
