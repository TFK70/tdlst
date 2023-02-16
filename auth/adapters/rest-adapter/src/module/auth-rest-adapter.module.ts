import * as controllers  from '../controllers'

import { DynamicModule } from '@nestjs/common'
import { Module }        from '@nestjs/common'

@Module({})
export class AuthRestAdapterModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: AuthRestAdapterModule,
      controllers: Object.values(controllers),
    }
  }
}
