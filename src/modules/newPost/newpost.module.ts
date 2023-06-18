import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from '../post/model/post.entity';
import { ProvinceEntity } from '../province/model/province.entity';
import { AttributeEntity } from '../attribute/model/attribute.entity';
import { LabelEntity } from '../label/model/label.entity';
import { ImageEntity } from '../image/model/image.entity';
import { OverviewEntity } from '../overview/model/overview.entity';
import { UserEntity } from '../user/model/user.entity';
import { NewPostService } from './newpost.service';
import { NewPostResolver } from './resolver/newpost.resolver';
import { InputNewPost } from './args/input_new_post.args';

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
