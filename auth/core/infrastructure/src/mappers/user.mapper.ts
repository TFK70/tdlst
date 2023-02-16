import { User }         from '@auth/domain-module'
import { UserDocument } from '@auth/mongoose-adapter-module'

export class UserMapper {
  static toDomain(document: UserDocument): User {
    return new User({
      id: document.id,
      password: document.password,
    })
  }

  static toPersistence(aggregate: User) {
    return {
      _id: aggregate.id,
      password: aggregate.password,
    }
  }
}
