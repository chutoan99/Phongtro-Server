import { Query, Resolver } from '@nestjs/graphql';

import { AttributeResponse } from '../schema/attributeResponse.schema';
import { AttributeService } from '../attribute.service';

@Resolver()
export class AttributeResolver {
  constructor(private readonly attributeService: AttributeService) {}

  @Query(() => AttributeResponse)
  attribute() {
    const response = this.attributeService.getAllAttribute();
    return response;
  }
}
