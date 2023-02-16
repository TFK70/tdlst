import { CommandHandler }  from '@nestjs/cqrs'
import { ICommandHandler } from '@nestjs/cqrs'

import { AuthService }     from '@auth/infrastructure-module'

import { SignupCommand }   from '../commands'

@CommandHandler(SignupCommand)
export class SignupCommandHandler implements ICommandHandler<SignupCommand> {
  constructor(
    private readonly authService: AuthService
    ) {}

  async execute(command: SignupCommand) {
    const { id, token } = await this.authService.signup(command.password)

    return { id, token }
  }
}
