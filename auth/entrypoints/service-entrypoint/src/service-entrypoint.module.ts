import { Module }                    from '@nestjs/common'

import { AuthApplicationModule }     from '@auth/application-module'
import { CqrsAdapterModule }         from '@auth/cqrs-adapter-module'
import { AuthInfrastructureModule }  from '@auth/infrastructure-module'
import { JwtAdapterModule }          from '@auth/jwt-adapter-module'
import { AuthMongooseAdapterModule } from '@auth/mongoose-adapter-module'
import { PassportAdapterModule }     from '@auth/passport-adapter-module'
import { AuthRestAdapterModule }     from '@auth/rest-adapter-module'

@Module({
  imports: [
    CqrsAdapterModule.register(),
    AuthInfrastructureModule.register(),
    AuthApplicationModule.register(),
    AuthRestAdapterModule.register(),
    AuthMongooseAdapterModule.register(),
    PassportAdapterModule.register(),
    JwtAdapterModule.register(),
  ],
})
export class ServiceEntrypointModule {}
