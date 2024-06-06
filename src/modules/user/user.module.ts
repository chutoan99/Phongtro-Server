import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UserResolver } from './user.resolver';
import { PostService } from '../post/post.service';
import { InputUpdateProfile } from './update_profile.args';
import { ProvinceEntity } from '../province/province.entity';
import { AttributeEntity } from '../attribute/attribute.entity';
import { LabelEntity } from '../label/label.entity';
import { PostEntity } from '../post/post.entity';
import { ImageEntity } from '../image/image.entity';
import { OverviewEntity } from '../overview/overview.entity';

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
