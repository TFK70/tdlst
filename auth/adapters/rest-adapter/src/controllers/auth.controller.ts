import { Body }           from '@nestjs/common'
import { Controller }     from '@nestjs/common'
import { Get }            from '@nestjs/common'
import { Headers }        from '@nestjs/common'
import { Post }           from '@nestjs/common'
import { UseGuards }      from '@nestjs/common'
import { CommandBus }     from '@nestjs/cqrs'
import { QueryBus }       from '@nestjs/cqrs'

import { SigninCommand }  from '@auth/application-module'
import { SignupCommand }  from '@auth/application-module'
import { GetUserQuery }   from '@auth/application-module'
import { JwtAuthGuard }   from '@auth/passport-adapter-module'
import { LocalAuthGuard } from '@auth/passport-adapter-module'

import { SigninDto }      from '../dtos'
import { SignupDto }      from '../dtos'

@Controller()
export class AuthController {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Post('/signin')
  @UseGuards(LocalAuthGuard)
  async signin(@Body() payload: SigninDto) {
    await this.commandBus.execute(new SigninCommand(payload.id, payload.password))
  }

  @Post('/signup')
  async signup(@Body() payload: SignupDto) {
    await this.commandBus.execute(new SignupCommand(payload.password))
  }

  @Get('/user')
  @UseGuards(JwtAuthGuard)
  async user(@Headers('Authorization') authorization: string) {
    return this.queryBus.execute(new GetUserQuery(authorization))
  }
}
