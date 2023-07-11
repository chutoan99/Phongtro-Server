import { Query, Resolver } from '@nestjs/graphql';
import { AreaService } from '../area.service';

import { AreaResponse } from '../schema/areaResponse.schema';

@Resolver()
export class AreaResolver {
  constructor(private readonly areaService: AreaService) {}

  @Query(() => AreaResponse)
  area() {
    const response = this.areaService.GetAllArea();
    return response;
  }
}
