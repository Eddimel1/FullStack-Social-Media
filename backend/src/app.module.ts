import { GroupsModule } from './modules/groups/groups.module'
import { PostModule } from './modules/post/post.module'
import { PubsubModule } from './globalModules/pub-sub.module'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getEnvPath } from './common/helpers/env.helper'
import { TypeOrmConfigService } from './common/shared/typeorm/typeorm.service'
import { UserModule } from './modules/user/user.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo'
import { AuthModule } from './modules/auth/auth-module.module'
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth-guard'
import { APP_GUARD } from '@nestjs/core'
import { ChatModule } from './modules/chat/chat.module'
import { corsConfig } from './common/shared/cors/cors.config'
import { RestFilesModule } from './modules/rest-files/rest-files.module'
import { CommentModule } from './modules/comment/comment.module'
import { UserInfoModule } from './modules/user-info/user-info.module'
import { FriendRequestsModule } from './modules/friends/modules/friend-requests/friend-requests.module'
import { FriendsModule } from './modules/friends/modules/friends/friends.module'
import { FriendsUnitedModule } from './modules/friends/friends-united.module'
import { GroupUserRelationshipModule } from './modules/groups/modules/group-user-relationship/group-user-relationship.module'
const envFilePath: string = getEnvPath(`${__dirname}/common/envs`)
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      driver: ApolloDriver,
      csrfPrevention: true,
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
        },

        // 'subscriptions-transport-ws': true,
      },
      cors: corsConfig,

      context: ({ req, res, extra }) => {
        return { req, res, extra }
      },
    }),

    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UserModule,
    AuthModule,
    ChatModule,
    PubsubModule,
    PostModule,
    GroupsModule,
    FriendsModule,
    CommentModule,
    UserInfoModule,
    RestFilesModule,
    FriendRequestsModule,
    GroupUserRelationshipModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
