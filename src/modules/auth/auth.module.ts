import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../user/user.entity'
import { InputLogin, InputRegister } from './auth.args'

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity])],
	controllers: [],
	providers: [AuthService, AuthResolver, InputRegister, InputLogin]
})
export class AuthModule {}
