import { Prop }                     from '@nestjs/mongoose'
import { Schema }                   from '@nestjs/mongoose'
import { SchemaFactory }            from '@nestjs/mongoose'

import { HydratedDocument }         from 'mongoose'
import { Schema as MongooseSchema } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ type: MongooseSchema.Types.String, required: true })
  password!: string
}

export const UserSchema = SchemaFactory.createForClass(User)
