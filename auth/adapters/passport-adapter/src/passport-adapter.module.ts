import * as strategies    from './strategies'

import { DynamicModule }  from '@nestjs/common'
import { Module }         from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

@Module({})
export class PassportAdapterModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: PassportAdapterModule,
      providers: Object.values(strategies),
      imports: [PassportModule],
      exports: [PassportModule, ...Object.values(strategies)],
    }
  }
}
