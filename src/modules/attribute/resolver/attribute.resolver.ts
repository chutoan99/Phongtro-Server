import { Query, Resolver } from '@nestjs/graphql';

import { AttributeResponse } from '../schema/attributeResponse.schema';
import { AttributeService } from '../attribute.service';

@Resolver()
export class AttributeResolver {
  constructor(private readonly attributeService: AttributeService) {}

  @Query(() => AttributeResponse)
  attribute() {
    const response = this.attributeService.findAll();
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get attribute.',
      response,
    };
  }
}
