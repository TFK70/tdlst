import { User } from '../aggregates'

export abstract class UsersRepository {
  abstract save(aggregate: User): Promise<string>

  abstract findById(id: string): Promise<User | undefined>
}
