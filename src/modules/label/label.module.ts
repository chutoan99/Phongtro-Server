import { Module } from '@nestjs/common';

import { LabelService } from './label.service';

@Module({
  controllers: [],
  providers: [LabelService],
})
export class LabelModule {}
