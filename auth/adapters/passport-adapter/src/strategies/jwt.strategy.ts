import { Injectable }       from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { ExtractJwt }       from 'passport-jwt'
import { Strategy }         from 'passport-jwt'

import { jwtAdapterConfig } from '@auth/jwt-adapter-module'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtAdapterConfig.secret,
    })
  }

  async validate(payload: any) {
    return { id: payload.sub }
  }
}
