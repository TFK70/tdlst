import { CommandHandler }  from '@nestjs/cqrs'
import { ICommandHandler } from '@nestjs/cqrs'

import { AuthService }     from '@auth/infrastructure-module'

import { SigninCommand }   from '../commands'

@CommandHandler(SigninCommand)
export class SigninCommandHandler implements ICommandHandler<SigninCommand> {
  constructor(
    private readonly authService: AuthService
    ) {}

  async execute(command: SigninCommand) {
    const credentials = await this.authService.signin(command.id, command.password)

    if (!credentials) {
      return { token: 'Unauthorized' }
    }

    return { token: credentials.token }
  }
}
