import { Query, Resolver } from '@nestjs/graphql';

import { PriceService } from '../price.service';
import { PriceResponse } from '../schema/priceResponse.schema';

@Resolver()
export class PriceResolver {
  constructor(private readonly priceService: PriceService) {}

  @Query(() => PriceResponse)
  price() {
    const response = this.priceService.findAll();
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get price.',
      response,
    };
  }
}
