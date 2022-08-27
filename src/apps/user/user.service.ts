import { UserRepository } from '@entities/user/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async findOneByUsername(username: string) {
    return this.userRepository.findOneByUsername(username);
  }
}
