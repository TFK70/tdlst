import { DynamicModule }    from '@nestjs/common'
import { Module }           from '@nestjs/common'
import { JwtModule }        from '@nestjs/jwt'

import { jwtAdapterConfig } from './jwt-adapter.config'

@Module({})
export class JwtAdapterModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: JwtAdapterModule,
      imports: [
        JwtModule.register({
          secret: jwtAdapterConfig.secret,
        }),
      ],
      exports: [JwtModule],
    }
  }
}
