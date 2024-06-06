import { Query, Resolver } from '@nestjs/graphql'

import { ImageService } from './image.service'
import { ImageResponse } from './imageResponse.schema'

@Resolver()
export class ImageResolver {
	constructor(private readonly _imageService: ImageService) {}

	@Query(() => ImageResponse)
	image() {
		const response = this._imageService.GetAllImage()
		return response
	}
}
