import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from '../post/post.entity';
import { ProvinceEntity } from '../province/province.entity';
import { AttributeEntity } from '../attribute/attribute.entity';
import { LabelEntity } from '../label/label.entity';
import { ImageEntity } from '../image/image.entity';
import { OverviewEntity } from '../overview/overview.entity';
import { UserEntity } from '../user/user.entity';
import { NewPostService } from './newpost.service';
import { NewPostResolver } from './newpost.resolver';
import { InputNewPost } from './input_new_post.args';

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
  controllers: [],
  providers: [NewPostService, NewPostResolver, InputNewPost],
})
export class NewPostModule {}
