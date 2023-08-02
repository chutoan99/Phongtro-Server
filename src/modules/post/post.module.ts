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
import { ProvinceEntity } from '../province/model/province.entity';
import { LabelEntity } from '../label/model/label.entity';
import { InputUpdatePost } from './args/input_update_post.args';
import { ProvinceService } from '../province/province.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PostEntity,
      ProvinceEntity,
      AttributeEntity,
      LabelEntity,
      ImageEntity,
      OverviewEntity,
      UserEntity,
    ]),
  ],
  providers: [
    PostResolver,
    PostService,
    InputPost,
    InputCreatePost,
    InputUpdatePost,
    ProvinceService,
  ],
})
export class PostModule {}
