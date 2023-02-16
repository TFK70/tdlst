import { DynamicModule }  from '@nestjs/common'
import { Module }         from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { User }           from '../schemas'
import { UserSchema }     from '../schemas'

@Module({})
export class AuthMongooseAdapterModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: AuthMongooseAdapterModule,
      imports: [
        MongooseModule.forRoot(
          process.env.MONGODB_CONNECTION_URL || 'mongodb://localhost:27017/users'
        ),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      ],
      exports: [MongooseModule],
    }
  }
}
