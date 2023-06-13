import { Module } from '@nestjs/common';

import { PostService } from './post.service';
import { PostResolver } from './resolver/post.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './model/post.entity';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/model/user.entity';
import { ImageEntity } from '../image/model/image.entity';
import { ImageService } from '../image/image.service';
import { AttributeEntity } from '../attribute/model/attribute.entity';
import { AttributeService } from '../attribute/attribute.service';
import { OverviewEntity } from '../overview/model/overview.entity';
import { OverviewService } from '../overview/overview.service';
import { InputPost } from './args/input_post.args';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PostEntity,
      UserEntity,
      ImageEntity,
      AttributeEntity,
      OverviewEntity,
    ]),
  ],
  controllers: [],
  providers: [PostService, PostResolver, InputPost],
})
export class PostModule {}
