import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageEntity } from './image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ImageEntity)
    private readonly _imageRepository: Repository<ImageEntity>,
  ) {}
  async GetAllImage() {
    const response = await this._imageRepository.find({
      where: { isActive: true },
    });
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get image.',
      response,
    };
  }
}
