import { corsConfig } from './express/cors/cors.config'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import { addResponseHeaders } from './express/Middlewares/Header.middleware'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule)
  const config: ConfigService = app.get(ConfigService)
  const port: number = config.get<number>('PORT')

  app.use(cookieParser())
  app.use(addResponseHeaders)
  app.enableCors(corsConfig)

  app.use(express.static('storage'))
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'))
  })
}


bootstrap()
