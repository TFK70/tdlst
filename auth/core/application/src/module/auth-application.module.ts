import * as commandHandlers from '../command-handlers'
import * as queryHandlers   from '../query-handlers'

import { DynamicModule }    from '@nestjs/common'
import { Module }           from '@nestjs/common'

@Module({})
export class AuthApplicationModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: AuthApplicationModule,
      providers: [...Object.values(commandHandlers), ...Object.values(queryHandlers)],
    }
  }
}
