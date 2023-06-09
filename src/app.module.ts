import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
//app
import { AppService } from './app.service';
import { AppController } from './app.controller';
//entity
import { AreaEntity } from './modules/area/area.entity';
import { AttributeEntity } from './modules/attribute/attribute.entity';
import { InsertModule } from './modules/insert/insert.module';
import { PostEntity } from './modules/post/post.entity';
import { CategoryEntity } from './modules/category/category.entity';
import { PriceEntity } from './modules/price/price.entity';
import { ProvinceEntity } from './modules/province/province.entity';
import { LabelEntity } from './modules/label/label.entity';
import { ImageEntity } from './modules/image/image.entity';
import { OverviewEntity } from './modules/overview/overview.entity';
import { UserEntity } from './modules/user/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-143.railway.app',
      port: 7263,
      username: 'postgres',
      password: 'Z8kXWH5kOvUQW4z1nZGw',
      database: 'railway',
      entities: [
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
      ],
      synchronize: true,
    }),
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
    ]),
    InsertModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
