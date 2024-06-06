import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
//app

//entity
import { ProvinceEntity } from './modules/province/province.entity'
import { AttributeEntity } from './modules/attribute/attribute.entity'
import { CategoryEntity } from './modules/category/category.entity'
import { OverviewEntity } from './modules/overview/overview.entity'
import { AreaEntity } from './modules/area/area.entity'
import { ImageEntity } from './modules/image/image.entity'
import { LabelEntity } from './modules/label/label.entity'
import { PostEntity } from './modules/post/post.entity'
import { PriceEntity } from './modules/price/price.entity'
import { UserEntity } from './modules/user/user.entity'
//module
import { AreaModule } from './modules/area'
import { CategoryModule } from './modules/category'
import { PriceModule } from './modules/price'
import { ProvinceModule } from './modules/province'
import { LabelModule } from './modules/label'
import { ImageModule } from './modules/image'
import { AttributeModule } from './modules/attribute'
import { OverviewModule } from './modules/overview'
import { UserModule } from './modules/user'
import { PostModule } from './modules/post'
import { InsertModule } from './modules/insert'
import { NewPostModule } from './modules/newPost'
import { AuthModule } from './modules/auth'

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
			playground: true,
			definitions: {
				path: join(process.cwd(), 'graphql.ts')
			}
		}),

		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: +process.env.DB_PORT,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
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
				UserEntity
			],
			synchronize: true
		}),

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
			UserEntity
		]),

		ConfigModule.forRoot({ envFilePath: ['.env'] }),

		AreaModule,
		CategoryModule,
		PriceModule,
		ProvinceModule,
		LabelModule,
		ImageModule,
		AttributeModule,
		OverviewModule,
		UserModule,
		PostModule,
		InsertModule,
		NewPostModule,
		AuthModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
