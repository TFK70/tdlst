import { Injectable }         from '@nestjs/common'
import { InjectModel }        from '@nestjs/mongoose'

import { Model }              from 'mongoose'

import { User }               from '@auth/domain-module'
import { UsersRepository }    from '@auth/domain-module'
import { UserDocument }       from '@auth/mongoose-adapter-module'
import { User as UserEntity } from '@auth/mongoose-adapter-module'

import { UserMapper }         from '../mappers'

@Injectable()
export class UsersRepositoryImpl extends UsersRepository {
  constructor(
    @InjectModel(UserEntity.name)
    private userModel: Model<UserDocument>
  ) {
    super()
  }

  async save(aggregate: User): Promise<string> {
    const user = new this.userModel(UserMapper.toPersistence(aggregate))
    const createdUser = await user.save()
    return createdUser._id.toString()
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.userModel.findById(id).exec()
    return user ? UserMapper.toDomain(user) : undefined
  }
}
