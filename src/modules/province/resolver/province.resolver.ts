import { Query, Resolver } from '@nestjs/graphql';

import { ProvinceService } from '../province.service';
import { ProvinceResponse } from '../schema/provinceResponse.schema';

@Resolver()
export class ProvinceResolver {
  constructor(private readonly provinceService: ProvinceService) {}

  @Query(() => ProvinceResponse)
  province() {
    const response = this.provinceService.findAll();
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get province.',
      response,
    };
  }
}
