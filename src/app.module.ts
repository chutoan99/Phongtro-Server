import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';
import { AreaModule } from './area/area.module';
import { AttributeService } from './attribute/attribute.service';
import { AttributeModule } from './attribute/attribute.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { ImageModule } from './image/image.module';
import { ProvinceModule } from './province/province.module';
import { PriceModule } from './price/price.module';
import { PriceController } from './price/price.controller';
import { PriceService } from './price/price.service';
import { OverviewController } from './overview/overview.controller';
import { OverviewService } from './overview/overview.service';
import { LabelModule } from './label/label.module';
import { IndexModule } from './index/index.module';
import { IndexController } from './index/index.controller';
import { IndexService } from './index/index.service';
import { OverviewModule } from './overview/overview.module';
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
    CategoryController,
    IndexController,
    OverviewController,
    PriceController,
  ],
  providers: [
    AppService,
    AttributeService,
    CategoryService,
    IndexService,
    OverviewService,
    PriceService,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
