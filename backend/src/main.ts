import { corsConfig } from './common/shared/cors/cors.config';
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'
import { graphqlUploadExpress } from 'graphql-upload-minimal'
import * as express from 'express'
import { addResponseHeaders } from './Middlewares/Header.middleware'
import { loggerMiddleWare } from './common/shared/middleWares/basicMiddleWares';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule)
  const config: ConfigService = app.get(ConfigService)
  const port: number = config.get<number>('PORT')
 
  app.use(cookieParser())
  app.use(addResponseHeaders)
  app.enableCors(corsConfig)
 
//   app.use((req,res,next) => loggerMiddleWare(req,res,next,"req"))
  app.use(express.static('storage'))
  

  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'))
  })
}

bootstrap()
