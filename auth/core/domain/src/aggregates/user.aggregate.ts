import { AggregateRoot } from '@nestjs/cqrs'

import { UserCreated }   from '../events'

export interface UserOptions {
  id: string
  password: string
}

export class User extends AggregateRoot {
  #id!: string

  #password!: string

  constructor(options?: UserOptions) {
    super()

    if (options) {
      this.#id = options.id
      this.#password = options.password
    }
  }

  get id() {
    return this.#id
  }

  get password() {
    return this.#password
  }

  get properties() {
    return {
      id: this.#id,
      password: this.#password,
    }
  }

  create(password: string) {
    this.apply(new UserCreated(password))
  }

  onUserCreated(event: UserCreated) {
    this.#password = event.password
  }
}
