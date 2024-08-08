import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth,module';
import { UserModule } from './user/user.module';
import { BoolmarkModule } from './boolmark/boolmark.module';


@Module({
  imports: [AuthModule, UserModule, BoolmarkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
