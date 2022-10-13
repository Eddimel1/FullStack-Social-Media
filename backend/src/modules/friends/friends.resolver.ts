import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FriendsService } from './friends.service';
import { Friend } from './entities/friend.entity';
import { CreateFriendInput } from './dto/create-friend.input';
import { UpdateFriendInput } from './dto/update-friend.input';

@Resolver(() => Friend)
export class FriendsResolver {
  constructor(private readonly friendsService: FriendsService) {}

  @Mutation(() => Friend)
  createFriend(@Args('createFriendInput') createFriendInput: CreateFriendInput) {
    return this.friendsService.create(createFriendInput);
  }

  @Query(() => [Friend], { name: 'friends' })
  findAll() {
    return this.friendsService.findAll();
  }

  @Query(() => Friend, { name: 'friend' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.friendsService.findOne(id);
  }

  @Mutation(() => Friend)
  updateFriend(@Args('updateFriendInput') updateFriendInput: UpdateFriendInput) {
    return this.friendsService.update(updateFriendInput.id, updateFriendInput);
  }

  @Mutation(() => Friend)
  removeFriend(@Args('id', { type: () => Int }) id: number) {
    return this.friendsService.remove(id);
  }
}
