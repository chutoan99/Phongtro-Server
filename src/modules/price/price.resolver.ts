import { Query, Resolver } from '@nestjs/graphql';

import { PriceService } from './price.service';
import { PriceResponse } from './priceResponse.schema';

@Resolver()
export class PriceResolver {
  constructor(private readonly _priceService: PriceService) {}

  @Query(() => PriceResponse)
  price() {
    const response = this._priceService.GetAllPrice();
    return response;
  }
}
