import { Injectable }            from '@nestjs/common'
import { UnauthorizedException } from '@nestjs/common'
import { PassportStrategy }      from '@nestjs/passport'

import { Strategy }              from 'passport-local'

import { AuthService }           from '@auth/infrastructure-module'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService
    ) {
    super()
  }

  async validate(id: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(id, password)

    if (!user) {
      throw new UnauthorizedException()
    }

    return { id: user.id }
  }
}
