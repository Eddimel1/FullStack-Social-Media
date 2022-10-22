import { SanitizedUserT } from 'src/GlobalTypes/user.types'
import { UserEntity } from 'src/modules/user/entities/user.entity'
import { sanitizeUser } from 'src/SharedUtils.ts/sanitizers/user.sanitizer'
import { fromFindAndCount } from 'src/SharedUtils.ts/transforms/transforms'
import { FindAndCountFriends_O } from '../dto/output.dto'
import { FriendShip } from '../entities/friendship.entity'

type _filteredUsersT = { friend: UserEntity }[]
type _filteredUserT = { friend: UserEntity }

export const filterAndTransformFriends = (
  friendships: [FriendShip[], number],
  myId: number,
) => {
  const copy_of_friendships = [...friendships[0]]

  copy_of_friendships.forEach((item) => {
    if (item.user1_id === myId) {
      delete item.user1_id
      delete item.user2_id
      delete item.user1
      item['friend'] = item.user2
      delete item.user2
    } else if (item.user2_id === myId) {
      delete item.user2_id
      delete item.user1_id
      delete item.user2
      item['friend'] = item.user1
      delete item.user1
    }
  })
  const friends = copy_of_friendships as unknown as _filteredUsersT
  const sanitized_friends = friends.map((user) => {
    return sanitizeUser(user.friend)
  })
  const filtered_tuple = [sanitized_friends, friendships[1]] as unknown as [
    SanitizedUserT[],
    number,
  ]

  return fromFindAndCount(
    filtered_tuple,
    'friends',
  ) as unknown as FindAndCountFriends_O
}

export const filterAndTransformFriend = (
  friendship: FriendShip,
  myId: number,
) => {
  const friendship_copy = { ...friendship }
  if (friendship_copy.user1_id === myId) {
    delete friendship_copy.user1_id
    delete friendship_copy.user2_id
    delete friendship_copy.user1
    friendship_copy['friend'] = friendship_copy.user2
    delete friendship_copy.user2
  } else if (friendship_copy.user2_id === myId) {
    delete friendship_copy.user2_id
    delete friendship_copy.user1_id
    delete friendship_copy.user2
    friendship_copy['friend'] = friendship_copy.user1
    delete friendship_copy.user1
  }
  const friend = { ...friendship_copy } as unknown as _filteredUserT
  return sanitizeUser(friend.friend)
}
