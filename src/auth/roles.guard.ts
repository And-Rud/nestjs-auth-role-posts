import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { ROLES_KEY } from './roles-auth.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiresRoles = this.reflector.getAllAndOverride<string[]>(
        ROLES_KEY,
        [context.getHandler, context.getClass],
      );
      if (!requiresRoles) {
        return true;
      }
      const req = context.switchToHttp().getRequest();

      const authHeader = req.headers.authorization;
      console.log(authHeader);
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'User not authorized' });
      }
      const user = this.jwtService.verify(token);
      req.user = user;
      return user.roles.some((role: { value: any }) =>
        requiresRoles.includes(role.value),
      );
    } catch (e) {
      throw new HttpException('dont have access', HttpStatus.FORBIDDEN);
    }
  }
}
