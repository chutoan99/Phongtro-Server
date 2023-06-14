import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
//app

//entity
import { ProvinceEntity } from './modules/province/model/province.entity';
import { AttributeEntity } from './modules/attribute/model/attribute.entity';
import { CategoryEntity } from './modules/category/model/category.entity';
import { OverviewEntity } from './modules/overview/model/overview.entity';
import { AreaEntity } from './modules/area/model/area.entity';
import { ImageEntity } from './modules/image/model/image.entity';
import { LabelEntity } from './modules/label/model/label.entity';
import { PostEntity } from './modules/post/model/post.entity';
import { PriceEntity } from './modules/price/model/price.entity';
import { UserEntity } from './modules/user/model/user.entity';

//module
import { InsertModule } from './modules/insert/insert.module';
import { AreaModule } from './modules/area/area.module';
import { CategoryModule } from './modules/category/category.module';
import { AttributeModule } from './modules/attribute/attribute.module';
import { ImageModule } from './modules/image/image.module';
import { ProvinceModule } from './modules/province/province.module';
import { PriceModule } from './modules/price/price.module';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    AreaModule,
    AttributeModule,
    CategoryModule,
    ImageModule,
    ProvinceModule,
    PriceModule,
    UserModule,
    PostModule,
    InsertModule,
    AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      definitions: {
        path: join(process.cwd(), 'graphql.ts'),
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

    ConfigModule.forRoot({ envFilePath: ['.env'] }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
