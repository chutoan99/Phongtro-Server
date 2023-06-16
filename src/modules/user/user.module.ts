import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserEntity } from './model/user.entity';
import { UserResolver } from './resolver/user.resolver';
import { PostService } from '../post/post.service';
import { InputUpdateProfile } from './args/update_profile.args';
import { ProvinceEntity } from '../province/model/province.entity';
import { AttributeEntity } from '../attribute/model/attribute.entity';
import { LabelEntity } from '../label/model/label.entity';
import { PostEntity } from '../post/model/post.entity';
import { ImageEntity } from '../image/model/image.entity';
import { OverviewEntity } from '../overview/model/overview.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ProvinceEntity,
      AttributeEntity,
      LabelEntity,
      PostEntity,
      ImageEntity,
      OverviewEntity,
    ]),
  ],
  controllers: [],
  providers: [UserService, UserResolver, PostService, InputUpdateProfile],
})
export class UserModule {}
