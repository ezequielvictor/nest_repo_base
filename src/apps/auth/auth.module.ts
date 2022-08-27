import { JwtStrategy } from '@apps/auth/strategies/jwt.strategy';
import { UserModule } from '@apps/user/user.module';
import { JwtConfigModule } from '@config/jwt/jwt.module';
import { JwtConfigService } from '@config/jwt/jwt.service';
import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Global()
@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtConfigModule,
    JwtModule.registerAsync({
      imports: [JwtConfigModule],
      inject: [JwtConfigService],
      useFactory: async (jwtConfig: JwtConfigService) => ({
        secret: jwtConfig.secret,
        signOptions: { expiresIn: 3600 },
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
