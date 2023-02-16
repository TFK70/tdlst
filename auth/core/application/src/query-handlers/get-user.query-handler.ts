import { QueryHandler }  from '@nestjs/cqrs'
import { IQueryHandler } from '@nestjs/cqrs'
import { Inject } from '@nestjs/common'

import { AuthService }   from '@auth/infrastructure-module'

import { GetUserQuery }  from '../queries'

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
  constructor(
    private readonly authService: AuthService
    ) {}

  async execute(query: GetUserQuery) {
    const user = await this.authService.whoAmI(query.token)

    if (!user) {
      return { id: 'Unauthorized' }
    }

    return { id: user.id }
  }
}
