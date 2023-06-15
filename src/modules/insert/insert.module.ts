import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsertController } from './insert.controller';
import { InsertService } from './insert.service';

import { AreaEntity } from '../area/model/area.entity';
import { AttributeEntity } from '../attribute/model/attribute.entity';
import { CategoryEntity } from '../category/model/category.entity';
import { ImageEntity } from '../image/model/image.entity';
import { LabelEntity } from '../label/model/label.entity';
import { OverviewEntity } from '../overview/model/overview.entity';
import { PostEntity } from '../post/model/post.entity';
import { PriceEntity } from '../price/model/price.entity';
import { ProvinceEntity } from '../province/model/province.entity';
import { UserEntity } from '../user/model/user.entity';
import { AreaModule } from '../area/area.module';
import { AttributeModule } from '../attribute/attribute.module';
import { CategoryModule } from '../category/category.module';
import { ImageModule } from '../image/image.module';
import { ProvinceModule } from '../province/province.module';
import { PriceModule } from '../price/price.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AreaEntity,
      CategoryEntity,
      PriceEntity,
      ProvinceEntity,
      LabelEntity,
      ImageEntity,
      PostEntity,
      AttributeEntity,
      OverviewEntity,
      UserEntity,
    ]), // Add other entities here if needed
    AreaModule,
    AttributeModule,
    CategoryModule,
    ImageModule,
    ProvinceModule,
    PriceModule,
    UserModule,
  ],
  controllers: [InsertController],
  providers: [InsertService],
})
export class InsertModule {}
