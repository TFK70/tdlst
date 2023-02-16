import { Injectable }      from '@nestjs/common'
import { JwtService }      from '@nestjs/jwt'

import { UsersRepository } from '@auth/domain-module'
import { User }            from '@auth/domain-module'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(id: string, password: string): Promise<{ id: string } | null> {
    const user = await this.usersRepository.findById(id)

    if (user && user.password === password) {
      return { id: user.id }
    }

    return null
  }

  async whoAmI(token: string): Promise<{ id: string } | null> {
    const payload = await this.jwtService.verify(token)
    const user = await this.usersRepository.findById(payload.sub)

    if (user) {
      return { id: user.id }
    }

    return null
  }

  async signin(id: string, password: string) {
    const user = await this.usersRepository.findById(id)

    if (user && user.password === password) {
      const token = await this.jwtService.sign({ sub: user.id })
      return { token }
    }

    return null
  }

  async signup(password: string) {
    const user = new User()

    user.create(password)

    const id = await this.usersRepository.save(user)
    const token = await this.jwtService.sign({ sub: id })

    return { id, token }
  }
}
