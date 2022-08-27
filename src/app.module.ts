import { AuthModule } from '@apps/auth/auth.module';
import { UserModule } from '@apps/user/user.module';
import { DBProviderModule } from '@config/database/mysql.module';
import { JwtConfigModule } from '@config/jwt/jwt.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DBProviderModule,
    JwtConfigModule,
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
