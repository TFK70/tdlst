import { NestFactory }             from '@nestjs/core'

import { ServiceEntrypointModule } from './service-entrypoint.module'

const bootstrap = async () => {
  const app = await NestFactory.create(ServiceEntrypointModule)
  await app.listen(3000)
}

bootstrap()
