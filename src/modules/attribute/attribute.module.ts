import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeResolver } from './attribute.resolver';
import { AttributeEntity } from './attribute.entity';
import { AttributeService } from './attribute.service';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeEntity])],
  controllers: [],
  providers: [AttributeService, AttributeResolver],
})
export class AttributeModule {}
