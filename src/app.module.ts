import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
//app
import { AppService } from './app.service';
import { AppController } from './app.controller';
//entity
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
import { join } from 'path';
import { AreaModule } from './modules/area/area.module';
import { AreaEntity } from './modules/area/model/area.entity';

@Module({
  imports: [
    AreaModule,
    InsertModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), './graphql.ts'),
      },
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-176.railway.app',
      port: 7039,
      username: 'postgres',
      password: 'rZPrPeE2Rv4SyzPaxzMG',
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
