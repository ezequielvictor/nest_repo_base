import { JwtAuthGuard } from '@apps/auth/guards/jwt.guard';
import { applyDecorators, UseGuards } from '@nestjs/common';

export function JwtAuth() {
  return applyDecorators(UseGuards(JwtAuthGuard));
}
