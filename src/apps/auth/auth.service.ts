import { UserService } from '@apps/user/user.service';
import { UserEntity } from '@entities/user/user.entity';
import { IJwtPayload } from '@interfaces/jwt-payload.interface';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(payload: IJwtPayload): Promise<UserEntity> {
    return this.usersService.findOneByUsername(payload.username);
  }

  async login(user: LoginDto): Promise<{ accessToken: string }> {
    try {
      const userRes = await this.usersService.findOneByUsername(user.username);
      if (userRes && (await userRes.checkIfPasswordIsValid(user.password))) {
        return {
          accessToken: this.jwtService.sign({
            id: userRes.id,
            username: userRes.username,
          }),
        };
      }
    } catch (error) {
      throw new BadRequestException(
        'Login Failed: Your username or password is incorrect',
      );
    }
  }
}
