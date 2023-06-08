import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
//entity
import { UserEntity } from './models/user/user.entity';
// controller
import { AttributeController } from './models/attribute/attribute.controller';
import { ProvinceController } from './models/province/province.controller';
import { OverviewController } from './models/overview/overview.controller';
import { CategoryController } from './models/category/category.controller';
import { ImageController } from './models/image/image.controller';
import { LabelController } from './models/label/label.controller';
import { UserController } from './models/user/user.controller';
import { AreaController } from './models/area/area.controller';
import { IndexController } from './models/index/index.controller';
import { PriceController } from './models/price/price.controller';
import { AppController } from './app.controller';
// service
import { ProvinceService } from './models/province/province.service';
import { AttributeService } from './models/attribute/attribute.service';
import { CategoryService } from './models/category/category.service';
import { OverviewService } from './models/overview/overview.service';
import { PriceService } from './models/price/price.service';
import { IndexService } from './models/index/index.service';
import { AreaService } from './models/area/area.service';
import { ImageService } from './models/image/image.service';
import { LabelService } from './models/label/label.service';
import { UserService } from './models/user/user.service';
import { AppService } from './app.service';
// attribute
import { AttributeModule } from './models/attribute/attribute.module';
import { CategoryModule } from './models/category/category.module';
import { ProvinceModule } from './models/province/province.module';
import { OverviewModule } from './models/overview/overview.module';
import { ImageModule } from './models/image/image.module';
import { IndexModule } from './models/index/index.module';
import { LabelModule } from './models/label/label.module';
import { PriceModule } from './models/price/price.module';
import { UserModule } from './models/user/user.module';
import { AreaModule } from './models/area/area.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-143.railway.app',
      port: 7263,
      username: 'postgres',
      password: 'Z8kXWH5kOvUQW4z1nZGw',
      database: 'railway',
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule,
    AreaModule,
    AttributeModule,
    CategoryModule,
    ImageModule,
    IndexModule,
    LabelModule,
    PriceModule,
    ProvinceModule,
    OverviewModule,
  ],
  controllers: [
    AppController,
    AreaController,
    AttributeController,
    ImageController,
    LabelController,
    CategoryController,
    IndexController,
    OverviewController,
    ProvinceController,
    PriceController,
    // UserController,
  ],
  providers: [
    AreaService,
    AttributeService,
    CategoryService,
    ImageService,
    IndexService,
    LabelService,
    OverviewService,
    PriceService,
    ProvinceService,
    // UserService,
    AppService,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
