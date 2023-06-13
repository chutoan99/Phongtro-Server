import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageEntity } from './model/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,
  ) {}
  async findAll() {
    const response = await this.imageRepository.find();
    return response;
  }
  async findById(id: any) {
    const response = await this.imageRepository.findOne({ where: { id: id } });
    return response;
  }
}
