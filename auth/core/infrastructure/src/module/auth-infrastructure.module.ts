import * as services           from '../services'

import { DynamicModule }       from '@nestjs/common'
import { Module }              from '@nestjs/common'

import { UsersRepository }     from '@auth/domain-module'

import { UsersRepositoryImpl } from '../repositories'

@Module({})
export class AuthInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: AuthInfrastructureModule,
      providers: [
        {
          provide: UsersRepository,
          useClass: UsersRepositoryImpl,
        },
        ...Object.values(services)
      ],
      exports: [
        {
          provide: UsersRepository,
          useClass: UsersRepositoryImpl,
        },
        ...Object.values(services)
      ],
    }
  }
}
