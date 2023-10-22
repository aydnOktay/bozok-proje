import { Module } from '@nestjs/common';
import { CredsService } from './creds.service';

@Module({
  providers: [CredsService]
})
export class CredsModule {}
