import { Module } from '@nestjs/common';

import { PostService } from './post.service';
import { PostResolver } from './resolver/post.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './model/post.entity';
import { UserEntity } from '../user/model/user.entity';
import { ImageEntity } from '../image/model/image.entity';
import { AttributeEntity } from '../attribute/model/attribute.entity';
import { OverviewEntity } from '../overview/model/overview.entity';
import { InputPost } from './args/input_post.args';
import { InputCreatePost } from './args/input_create_post.args';
import { InputNewPost } from './args/input_new_post.args';

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
  providers: [
    PostService,
    PostResolver,
    InputPost,
    InputCreatePost,
    InputNewPost,
  ],
})
export class PostModule {}
