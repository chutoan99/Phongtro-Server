import { Query, Resolver } from '@nestjs/graphql';

import { ImageService } from '../image.service';
import { ImageResponse } from '../schema/imageResponse.schema';

@Resolver()
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}

  @Query(() => ImageResponse)
  image() {
    const response = this.imageService.findAll();
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get image.',
      response,
    };
  }
}
