import { GroupsModule } from './modules/groups/groups.module'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getEnvPath } from './miscellaneous/envs/helpers/env.helper'
import { TypeOrmConfigService } from './typeOrm/config/typeorm.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo'
import { AuthModule } from './modules/auth/auth-module.module'
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth-guard'
import { APP_GUARD } from '@nestjs/core'
import { ChatModule } from './modules/chat/chat.module'
import { corsConfig } from './express/cors/cors.config'
import { RestFilesModule } from './modules/rest-files/rest-files.module'
import { FriendRequestsModule } from './modules/friends/modules/friend-requests/friend-requests.module'
import { FriendsModule } from './modules/friends/modules/friends/friends.module'
import { GroupUserRelationshipModule } from './modules/groups/modules/group-user-relationship/group-user-relationship.module'
import { RepliesModule_G } from './modules/replies/group-replies/group-replies.module'
import { RepliesModule_U } from './modules/replies/user-replies/replies.module'
import { PubsubModule } from './global/globalModules/pub-sub.module'
import { CommentsForGroupModule } from './modules/comments/group/comments-for-group.module'
import { CommentModule } from './modules/comments/user/comment.module'
import { GroupInfoModule } from './modules/infos/group/group-info.module'
import { UserInfoModule } from './modules/infos/user/user-info.module'
import { PostsForGroupModule } from './modules/posts/group/posts-for-group.module'
import { PostModule } from './modules/posts/user/post.module'
import { UserModule } from './modules/users/user.module'

const envFilePath: string = getEnvPath(`src/miscellaneous/envs`)
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
    PostsForGroupModule,
    GroupUserRelationshipModule,
    GroupInfoModule,
    RepliesModule_G,
    RepliesModule_U,
    CommentsForGroupModule,
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
