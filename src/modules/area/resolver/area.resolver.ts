import { Query, Resolver } from '@nestjs/graphql';
import { AreaService } from '../area.service';

import { AreaResponse } from '../schema/areaResponse.schema';

@Resolver()
export class AreaResolver {
  constructor(private readonly areaService: AreaService) {}

  @Query(() => AreaResponse)
  area() {
    const response = this.areaService.findAll();
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get area.',
      response,
    };
  }
}
