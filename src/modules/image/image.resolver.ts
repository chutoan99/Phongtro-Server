import { Query, Resolver } from '@nestjs/graphql'

import { ImageService } from './image.service'
import { ImageSchema } from './image.schema'

@Resolver()
export class ImageResolver {
	constructor(private readonly _imageService: ImageService) {}

	@Query(() => ImageSchema)
	image() {
		const response = this._imageService.GetAllImage()
		return response
	}
}
