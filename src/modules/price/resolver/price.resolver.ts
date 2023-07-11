import { Query, Resolver } from '@nestjs/graphql';

import { PriceService } from '../price.service';
import { PriceResponse } from '../schema/priceResponse.schema';

@Resolver()
export class PriceResolver {
  constructor(private readonly priceService: PriceService) {}

  @Query(() => PriceResponse)
  price() {
    const response = this.priceService.GetAllPrice();
    return response;
  }
}
