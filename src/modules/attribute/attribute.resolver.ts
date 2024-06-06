import { Query, Resolver } from '@nestjs/graphql';

import { AttributeService } from './attribute.service';
import { AttributeResponse } from './attribute.schema';

@Resolver()
export class AttributeResolver {
  constructor(private readonly _attributeService: AttributeService) {}

  @Query(() => AttributeResponse)
  attribute() {
    const response = this._attributeService.getAllAttribute();
    return response;
  }
}
