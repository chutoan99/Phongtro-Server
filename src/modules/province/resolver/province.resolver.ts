import { Query, Resolver } from '@nestjs/graphql';

import { ProvinceService } from '../province.service';
import { ProvinceResponse } from '../schema/provinceResponse.schema';

@Resolver()
export class ProvinceResolver {
  constructor(private readonly provinceService: ProvinceService) {}

  @Query(() => ProvinceResponse)
  province() {
    const response = this.provinceService.GetAllProvince();
    return response;
  }
}
