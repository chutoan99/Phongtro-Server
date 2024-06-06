import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly _categoryRepository: Repository<CategoryEntity>,
  ) {}
  async GetAllCategory() {
    const response = await this._categoryRepository.find({
      where: { isActive: true },
    });
    return {
      err: response ? 0 : 1,
      msg: response ? 'OK' : 'Failed to get category.',
      response,
    };
  }
}
