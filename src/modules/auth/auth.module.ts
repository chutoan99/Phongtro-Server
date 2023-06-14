import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './resolver/auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/model/user.entity';
import { InputRegister } from './args/input_register.args';
import { InputLogin } from './args/input_login.args';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers: [AuthService, AuthResolver, InputRegister, InputLogin],
})
export class AuthModule {}
