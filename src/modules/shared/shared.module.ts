import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeEntity } from '../attribute/model/attribute.entity';
import { ImageEntity } from '../image/model/image.entity';
import { OverviewEntity } from '../overview/model/overview.entity';
import { ProvinceEntity } from '../province/model/province.entity';
import { LabelEntity } from '../label/model/label.entity';
import { AreaEntity } from '../area/model/area.entity';
import { CategoryEntity } from '../category/model/category.entity';
import { PriceEntity } from '../price/model/price.entity';
import { PostEntity } from '../post/model/post.entity';
import { UserEntity } from '../user/model/user.entity';

// Import and list all the common entities here

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AttributeEntity,
      ImageEntity,
      OverviewEntity,
      ProvinceEntity,
      LabelEntity,
      AreaEntity,
      CategoryEntity,
      PriceEntity,
      PostEntity,
      UserEntity,
    ]),
  ],
  exports: [
    TypeOrmModule,
    AttributeEntity,
    ImageEntity,
    OverviewEntity,
    ProvinceEntity,
    LabelEntity,
    AreaEntity,
    CategoryEntity,
    PriceEntity,
    PostEntity,
    UserEntity,
  ],
})
export class SharedModule {}
