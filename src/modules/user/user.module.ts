import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserEntity } from './model/user.entity';
import { UserResolver } from './resolver/user.resolver';
import { PostEntity } from '../post/model/post.entity';
import { PostService } from '../post/post.service';
import { InputUpdateProfile } from './args/update_profile.args';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PostEntity])],
  controllers: [],
  providers: [UserService, UserResolver, PostService, InputUpdateProfile],
})
export class UserModule {}
