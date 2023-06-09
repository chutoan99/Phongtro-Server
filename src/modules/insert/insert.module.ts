import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsertController } from './insert.controller';
import { InsertService } from './insert.service';
import { AreaEntity } from '../area/area.entity';

import { CategoryEntity } from '../category/category.entity';
import { PriceEntity } from '../price/price.entity';
import { ProvinceEntity } from '../province/province.entity';
import { LabelEntity } from '../label/label.entity';
import { ImageEntity } from '../image/image.entity';
import { PostEntity } from '../post/post.entity';
import { AttributeEntity } from '../attribute/attribute.entity';
import { OverviewEntity } from '../overview/overview.entity';
import { UserEntity } from '../user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AreaEntity,
      CategoryEntity,
      PriceEntity,
      ProvinceEntity,
      ProvinceEntity,
      LabelEntity,
      ImageEntity,
      PostEntity,
      AttributeEntity,
      OverviewEntity,
      UserEntity,
    ]), // Add other entities here if needed
  ],
  controllers: [InsertController],
  providers: [InsertService],
})
export class InsertModule {}
